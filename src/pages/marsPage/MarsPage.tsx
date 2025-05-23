import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainMarsContainer from "./components/ComponentContainer/MainMarsContainer";
import { IMarsPhoto } from "../../types/mars";
import ReactPaginate from "react-paginate";
import cls from "./MarsPage.module.scss";
import SettingsMars from "./components/SettingsMars/SettingsMars";
import { fetchMarsPhotos, fetchPageCount } from "../../api/mars";
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";

const MarsPage = () => {
  const [marsPhoto, setMarsPhoto] = useState<IMarsPhoto[]>([]);
  const [selectPhoto, setSelectPhoto] = useState<IMarsPhoto | undefined>(
    undefined
  );
  const [roverName, setRoverName] = useState("curiosity");
  const [sol, setSol] = useState(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [pageOffset, setPageOffset] = useState(0);
  const [totalSolCount, setTotalSolCount] = useState<number>(0);
  const [noPhoto, setNoPhoto] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const onPage = (e: { selected: number }) => {
    const newPage = e.selected + 1;
    setPage(newPage);
    setPageOffset(e.selected);
  };

  const getMarsPhotos = async (page: number, sol: number, rover: string) => {
    setLoading(true);
    const result = await fetchMarsPhotos(page, sol, rover);
    if (result.photos.length) {
      setMarsPhoto(result.photos);
      setNoPhoto(false);
      setTotalSolCount(result.photos[0].rover.max_sol);
    } else setNoPhoto(true);
    setLoading(false);
  };

  const getPageCount = async (sol: number, rover: string) => {
    const result = await fetchPageCount(sol, rover);
    const pageCount = Math.floor(result.photos.length / 25);
    setPageCount(pageCount);
  };

  useEffect(() => {
    setPage(1);
    getPageCount(sol, roverName);
  }, [sol, roverName]);

  useEffect(() => {
    if (page) {
      getMarsPhotos(page, sol, roverName);
    }
  }, [page, sol, roverName]);

  return (
    <div>
      <SettingsMars
        totalSolCount={totalSolCount}
        setSol={setSol}
        setRoverName={setRoverName}
      />
      {!noPhoto ? (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <MainMarsContainer
                marsPhoto={marsPhoto}
                setSelectPhoto={setSelectPhoto}
                setIsShown={setIsShown}
              />
              <div className={cls.containerPaginationComponent}>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="Next"
                  previousLabel="Previous"
                  onPageChange={(e) => onPage(e)}
                  pageRangeDisplayed={2}
                  pageCount={pageCount}
                  renderOnZeroPageCount={null}
                  pageClassName={cls.pageClassName}
                  containerClassName={cls.paginationContainer}
                  pageLinkClassName={cls.pageLinkClassName}
                  previousClassName={cls.previousClassName}
                  nextClassName={cls.nextClassName}
                  breakClassName={cls.breakClassName}
                  activeClassName={cls.active}
                  forcePage={pageOffset}
                />
              </div>
            </>
          )}
        </>
      ) : loading ? (
        <Loader />
      ) : (
        <h1 className={cls.noPhotos}>No photos</h1>
      )}
      {selectPhoto && (
        <Modal isShown={isShown} setIsShow={setIsShown}>
          <img src={selectPhoto.img_src} alt="mars photo" />
        </Modal>
      )}
    </div>
  );
};

export default MarsPage;

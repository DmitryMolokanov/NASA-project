import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import MainMarsContainer from './components/ComponentContainer/MainMarsContainer';
import { IMarsPhoto } from '../../types/mars';
import ReactPaginate from 'react-paginate';
import cls from "./MarsPage.module.scss"
import SettingsMars from './components/SettingsMars/SettingsMars';
import { fetchMarsPhotos, fetchPageCount } from '../../api/mars';


const MarsPage = () => {

    const [marsPhoto, setMarsPhoto] = useState<IMarsPhoto[]>([])
    const [sol, setSol] = useState(0)
    const [pageCount, setPageCount] = useState<number>(0)
    const [page, setPage] = useState<number>(1)
    const [totalSolCount, setTotalSolCount] = useState<number>(0)
    const [noPhoto, setNoPhoto] = useState(false)

    const onPage = (e: { selected: number }) => {
        const newPage = e.selected + 1
        setPage(newPage)
    }

    const getMarsPhotos = async (page: number, sol: number) => {
        const result = await fetchMarsPhotos(page, sol)
        if (result.photos.length) {
            setMarsPhoto(result.photos)
            setNoPhoto(false)
            setTotalSolCount(result.photos[0].rover.max_sol)
        } else setNoPhoto(true)
    }

    const getPageCount = async (sol: number) => {
        const result = await fetchPageCount(sol)
        const pageCount = Math.floor(result.photos.length / 25)
        setPageCount(pageCount)
    }

    useEffect(() => {
        getPageCount(sol)
    }, [sol])

    useEffect(() => {
        if (page) {
            getMarsPhotos(page, sol)
        }
    }, [page, sol])

    return (
        <div>
            <Header />
            <SettingsMars totalSolCount={totalSolCount} setSol={setSol} />
            {
                !noPhoto ? <>
                    <MainMarsContainer marsPhoto={marsPhoto} />
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
                        />
                    </div>
                </> : <h1 className={cls.noPhotos}>No photos</h1>
            }

        </div>
    )
};

export default MarsPage

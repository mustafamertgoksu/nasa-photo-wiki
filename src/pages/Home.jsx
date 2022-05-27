import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDatas } from "../features/photos/photoSlice";
import styles from '../components/styles/Home.module.css';
import Header from "../components/Header";


const Home = () => {
    const datas = useSelector(state => state.photos.items);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDatas());
    }, [dispatch]);

    console.log(datas);

    return (
        <div className='Container'>
            <Header />
            <div className={styles.card}>
                <h1 className={styles.title}>{datas.title}</h1>
                <h2 className={styles.title}>{datas.date}</h2>
                <p className={styles.explanation}>{datas.explanation}</p>
                <img
                    src={datas.url}
                    alt={datas.title}
                    className={styles.img}
                />
            </div>
        </div>
    )
}

export default Home;
import { BiSolidCameraMovie, BiSolidMoviePlay } from "react-icons/bi";
import { SiYoutubemusic } from "react-icons/si";
import { FaGithub, FaInstagram, FaGoogle, FaYoutube, FaBookOpen, FaHome, FaCheckSquare } from "react-icons/fa";

export const headerMenus = [
    {
        title: "홈",
        icon: <FaHome />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <BiSolidMoviePlay />,
        src: "/today"
    },
    {
        title: "추천 음악",
        icon: <SiYoutubemusic />,
        src: "/music"
    },
    {
        title: "추천 영화",
        icon: <BiSolidCameraMovie />,
        src: "/movie"
    },
    {
        title: "추천 도서",
        icon: <FaBookOpen />,
        src: "/book"
    },
    {
        title: "추천 애니",
        icon: <FaCheckSquare />,
        src: "/anime"
    },
    {
        title: "유튜브 사이트",
        icon: <FaYoutube />,
        src: "/youtube"
    }
];


export const searchKeyword = [
    {
        title: "MyYoutube",
        src: "/search/youtube"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React",
        src: "/search/react"
    },
    {
        title: "JAVA",
        src: "/search/java"
    },
    {
        title: "ORACLE",
        src: "/search/oracle"
    },
    {
        title: "SPRING",
        src: "/search/spring"
    }


];


export const snsLink = [

    {
        icon: <FaGithub />,
        src: "https://github.com"
    },
    {
        icon: <FaYoutube />,
        src: "https://youtube.com"
    },
    {
        icon: <FaGoogle />,
        src: "https://google.com"
    },
    {
        icon: <FaInstagram />,
        src: "https://instagram.com"
    },

];
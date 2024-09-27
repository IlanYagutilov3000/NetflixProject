import { table } from "console";
import { FunctionComponent } from "react";

interface TopSeriesProps {

}

export interface Series {
    rank: number;
    img: string;
    name: string;
    startYear: number;
    rate: number;
    description: string;
    running: boolean;
}

const TopSeries: FunctionComponent<TopSeriesProps> = () => {
    const series: Series[] = [
        {
            rank: 1,
            img: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY209_CR7,0,140,209_AL_.jpg',
            name: 'Game of Thrones',
            startYear: 2011,
            rate: 9.3,
            description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
            running: false
        },
        {
            rank: 2,
            img: 'https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_UY209_CR0,0,140,209_AL_.jpg',
            name: 'Stranger Things',
            startYear: 2016,
            rate: 8.7,
            description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
            running: true
        },
        {
            rank: 3,
            img: 'https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY209_CR0,0,140,209_AL_.jpg',
            name: 'The Walking Dead',
            startYear: 2010,
            rate: 8.2,
            description: 'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.',
            running: true
        },
        {
            rank: 4,
            img: 'https://m.media-amazon.com/images/M/MV5BMDYzZTRlNGEtZDc2Mi00ZGNjLTlmZDAtMmVjMDZkOThiODEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
            name: '13 Reasons Why',
            startYear: 2017,
            rate: 7.6,
            description: 'Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.',
            running: false
        },
        {
            rank: 5,
            img: 'https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_UY209_CR14,0,140,209_AL_.jpg',
            name: 'The 100',
            startYear: 2014,
            rate: 7.6,
            description: 'Set ninety-seven years after a nuclear war has destroyed civilization, when a spaceship housing humanit',
            running: false
        },
        {
            rank: 6,
            img: 'https://m.media-amazon.com/images/M/MV5BYjYyM2FmMmMtZDgyZi00NGU3LWI3NzktODllZDY0YzQyNzgyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
            name: 'Orange Is the New Black ',
            startYear: 2013,
            rate: 8.1,
            description: 'Convicted of a decade old crime of transporting drug money to an ex-girlfriend, normally law-abiding Piper Chapman is sentenced to a year and a half behind bars to face the reality of how life-changing prison can really be.',
            running: false
        },
        {
            rank: 7,
            img: 'https://m.media-amazon.com/images/M/MV5BNDYxOTU0NDYtYzg2MC00YzgyLTg1YzctMDc1MGJmOGIzMTc3XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX140_CR0,0,140,209_AL_.jpg',
            name: 'Riverdale',
            startYear: 2017,
            rate: 6.9,
            description: 'While navigating the troubled waters of romance, school and family, Archie and his gang become entangled in dark Riverdale mysteries.',
            running: true
        },
        {
            rank: 8,
            img: 'https://m.media-amazon.com/images/M/MV5BMjgwNGNkZGYtMWQyYS00YjEzLWFmZTctODUzYWMxOWJkNTAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
            name: 'Gerys Anatomy',
            startYear: 2005,
            rate: 7.6,
            description: 'A drama centered on the personal and professional lives of five surgical interns and their supervisors.',
            running: true
        },
        {
            rank: 9,
            img: 'https://m.media-amazon.com/images/M/MV5BOGU2N2M1YzgtNmE1YS00OGFhLTllMzUtYWU1MDA3NWVmYWYwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR13,0,140,209_AL_.jpg',
            name: 'The Flash',
            startYear: 2014,
            rate: 7.7,
            description: 'After being struck by lightning, Barry Allen wakes up from his coma to discover hes been given the power of super speed, becoming the next Flash, fighting crime in Central City.',
            running: true
        },
        {
            rank: 10,
            img: 'https://m.media-amazon.com/images/M/MV5BMTI0NTMwMDgtYTMzZC00YmJhLTg4NzMtMTc1NjI4MWY4NmQ4XkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_UY209_CR13,0,140,209_AL_.jpg',
            name: 'Green Arrow',
            startYear: 2012,
            rate: 7.5,
            description: 'Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.',
            running: false
        },
    ];
    return (
        <>
            <div className="container">
                {series.length ? (
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>#Rank</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Strat Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {series.map((series) => (
                                <tr key={series.rank}>
                                    <td>{series.rate}</td>
                                    <td><img src={series.img} alt={series.name} /></td>
                                    <td>{series.name}</td>
                                    <td>{series.startYear}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No movies were found</p>
                )};
            </div>
        </>);
}

export default TopSeries;



/* {photos.length ? (
            <table className="table">
                <thead>
                    <tr>
                        <th>Album id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {photos.map((photo: any) => (
                        <tr key={photo.id}>
                            <td>{photo.albumId}</td>
                            <td>{photo.id}</td>
                            <td>{photo.title}</td>
                            <td>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <p>No photos</p>
        )} */
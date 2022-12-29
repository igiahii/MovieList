export default function Paginate(movies , pagenum ,pagesize) {

    let part1 = (pagenum - 1) * pagesize;
    let newarr = movies.slice(part1, pagenum * pagesize);
    return newarr
}
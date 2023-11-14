import Link from "next/link";

const Navigation = (props) => {
    const { next, prev } = props;
    if (next && next !== "" && prev === "") {
        const query = next.split("?")[0];
        console.log(query);
        return (
            <>
                <li className="mx-1">
                    <Link
                    href="#"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                    Next
                    </Link>
                </li>    
                <li className="mx-1">
                    <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                    Prev
                    </a>
                </li>
            </>
        )
    }
    
    return (
        <>
        <h2>holaaaa</h2>
        <li className="mx-1">
            <a
            href="#0"
            className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
            Prev
            </a>
        </li>
        <li className="mx-1">
            <a
            href="#0"
            className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
            >
            Next
        </a>
        </li>
        </>
    )       
}

export default Navigation
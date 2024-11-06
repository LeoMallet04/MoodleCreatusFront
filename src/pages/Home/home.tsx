import NavBar from "@/components/base/NavBar/NavBar";
import Card from "@/components/base/Card/Card";

function Home(){
    return(
        <>
            <NavBar />
            <Card index={0} url={""} image={""} />
            <Card index={0} url={""} isBlocked image={""} />
        </>
    )
}

export default Home;
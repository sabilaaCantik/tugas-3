import ReactDOM from "react-dom/client";

let user   = "Sabila";

function Wellcome(props){
    return <h1>Selamat Datang {props.nama}</h1>;
}

function App(props) {
    if(props.pengguna !== null){
        return <Wellcome nama = {props.pengguna}/>;
    }else{
        return <button>Login</button>;
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
<Wellcome nama = "Sabila Noor Sania" />
<App pengguna = {user}/>
</>);
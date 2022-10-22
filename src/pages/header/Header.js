import css from "../MoviesPage.module.css";
import {useForm} from "react-hook-form";

const Header = () => {

    const {register,handleSubmit,reset} = useForm();

    const submit = (data) => {
        console.log(data.search);

    }
    return (
        <div>
            <div className={css.header}>
                <div>
                    <button>sw</button>
                </div>
                <div>
                    <form onSubmit={handleSubmit(submit)}>
                        <input type="text" placeholder={'search'} {...register('search')}/>
                        <button>search</button>
                    </form>
                </div>
                <div>
                    <button>genres</button>
                </div>
            </div>
            <div className={css.genres}>

            </div>
        </div>
    )
}
export {Header};
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f1f7ff;
    text-align: center;

    form {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        padding: 20px 0;

        h1 {   
            color: ${props => props.theme.themeColor};
            margin: 0;
            margin-bottom: 30px;
            font-size: 35px;
            font-weight: bold;
        }
        input {
            display: block;
            border: 0px;
            height: 50px;
            margin-top: 20px;
            padding: 5px 30px;
            font-size: 20px;
            box-sizing: border-box;
            width: 40vw;
        }
        input:focus {
            outline: none;
        }
        .error {
            border-bottom: 4px solid #f1b1b1;
        }
        .submit {
            background-color: ${props => props.theme.themeColor};
            color: white;
            border-radius: 10px;
            &:hover {
                cursor: pointer;
            }
            margin: 30px 0 50px 0;
        }
    }
`
const ErrorMsg = styled.p`
    line-height: 100%;
    text-align: right;
    margin: 0;
    color: #d08181;
    font-weight: bold;

`
interface IFormInput {
    email: string;
    password: string;
    passwordConfirm: string;
    name: string;
    studentId: number;
    studentMajor: string;
};

const schema = yup.object({
    email: yup
        .string()
        .required('*이메일을 입력해주세요')
        .matches(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            '*이메일 형식을 확인해주세요'
        ),
    password: yup
        .string()
        .required('*비밀번호를 입력해주세요')
}).required();

export default function Login(){
    const { 
        register,
        handleSubmit,
        formState: { errors }   
     } = useForm<IFormInput>({
        resolver: yupResolver(schema)
      });
    
    const onSubmit = (data: IFormInput) => {
        alert(JSON.stringify(data));
    };
    return(
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>로그인</h1>
                <div>
                    <input 
                        type="text" 
                        className={errors.email?"error":""}
                        placeholder="계정을 입력해주세요"
                        {...register("email")}
                    />
                    <ErrorMsg>
                        {(errors.email)?<p>{errors.email.message}</p>:""}
                    </ErrorMsg>
                    <input 
                        type="password" 
                        className={errors.password?"error":""}
                        placeholder="비밀번호를 입력해주세요"
                        {...register("password")}
                    />
                    <ErrorMsg>
                        {(errors.password)?<p>{errors.password.message}</p>:""}
                    </ErrorMsg>
                    <input className="submit" type="submit" value="로그인" />
                </div>
                <div>
                    <Link to="/signup">회원가입</Link>
                </div>
            </form>
        </Container>
    )
}
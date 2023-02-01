import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react"
import axios from '../api/api'

const college = [
    {
        name: "문과대학",
        major: [
            "국어국문학과",
            "사학과",
            "철학과",
            "영미인문학과",
        ]
    },
    {
        name: "법과대학",
        major: [
            "법학과",
        ]
    },
    {
        name: "사회과학대학",
        major: [
            "정치외교학과",
            "행정학과",
            "도시계획·부동산학부",
            "미디어커뮤니케이션",
            "상담학과",
        ]
    },
    {
        name: "경영경제대학",
        major: [
            "경제학과",
            "무역학과",
            "경영학부",
            "국제학부",
            "산업경영학과"
        ]
    },
    {
        name: "공과대학",
        major: [
            "전자전기공학부",
            "고분자시스템공학부",
            "토목환경공학과",
            "기계공학과",
            "화학공학과",
            "건축학부",
        ]
    },
    {
        name: "SW융합대학",
        major: [
            "소프트웨어학과",
            "컴퓨터공학과",
            "모바일시스템공학과",
            "정보통계학과",
            "산업보안학과",
            "SW융합학부"
        ]
    },
    {
        name: "사범대학",
        major: [
            "한문교육과",
            "특수교육과",
            "수학교육과",
            "과학교육과",
            "체육교육과",
        ]
    },
    {
        name: "음악·예술대학",
        major: [
            "도예과",
            "디자인학부",
            "공연영화학부",
            "무용과",
            "음악학부",
        ]
    },

]
const CollegeBox = styled.div`
    .collegeBtn {
        margin: 0 10px 10px 0;
        padding: 5px;
        background-color: white;
        border: 2px solid #bbc8ff;
        border-radius: 5px;
        color: ${props => props.theme.themeColor};
        font-weight: bold;
        &:hover{
            cursor: pointer;
            background-color: #bbc8ff;
        }
    }
    .active {
            background-color: #bbc8ff;
    }   
`

const MajorBox = styled.div`
    display: block;
`

const MajorContainer = styled.div`
    margin-top: 10px;
    .option {
        margin-bottom: 5px;
        box-sizing: border-box;
        input:hover, label:hover {
            cursor: pointer!important;
        }
        label:hover {
                background-color: #c1d6ff;
            }
    }
`

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    background: #f1f7ff;

    form {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 600px;
        width: 60vw;
        padding: 20px 0;
        text-align: left;

        h1 {   
            color: ${props => props.theme.themeColor};
            margin: 0;
            margin-bottom: 50px;
            font-size: 35px;
            font-weight: bold;
        }
        label {
            text-align: left;
            color: ${(props) => props.theme.textColor};
            font-weight: bold;
        }
        .inputRow {
            margin-bottom: 20px;
        }
        input[type=text], input[type=number], input[type=password],input[type=submit] {
            display: block;
            border: 0px;
            height: 50px;
            margin: 10px 0 0px 0;
            padding: 5px 30px;
            font-size: 20px;
            box-sizing: border-box;
            width: 100%;
        }
        input:focus,input:active {
            outline:none;
        }
        input.error {
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
        .half {
            display: flex;
            width: 100%;
            gap: 10px;
            div {
                display: flex;
                flex-direction: column;
                width: 50%;
                input {
                    width: 100%;
                }
            }
        }
    }
`

const ErrorMsg = styled.span`
    color: #df5d5d;
    font-weight: bold;
    margin-left: 10px;
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
        .required('*이메일 필수')
        .matches(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            '*이메일 형식에 맞지 않습니다'
        ),
    password: yup
        .string()
        .required('*비밀번호 필수')
        .test('len', '*8자리 입력', val => val?.toString().length === 8),
    passwordConfirm: yup
        .string()
        .required('*비밀번호 필수')
        .oneOf([yup.ref('password'), null], '*일치하지 않습니다')
        .test('len', '*8자리 입력', val => val?.toString().length === 8),
    name: yup
        .string()
        .required('*이름 필수'),
    studentId: yup
        .number()
        .required('*학번 필수')
        .test('len', '*8자리 입력', val => val?.toString().length === 8)
        .typeError('*학번 필수'),
    studentMajor: yup
        .string()
        .required('*필수 선택'),
}).required();

export default function SignUp(){
    const { 
        register,
        handleSubmit,
        formState: { errors }   
     } = useForm<IFormInput>({
        resolver: yupResolver(schema)
      });
    
    const onSubmit = async (data: IFormInput) => {
        alert(JSON.stringify(data));
        const { email, name, password, studentId, studentMajor } = data;
        axios.post('/user/create', {
            email, name, password, studentId, studentMajor
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response)
                }
            })
            .catch((error) => console.log(error.response));
    };
    const [majorList,setMajorList] = useState<string[]>();


    function collegeClick(e:any) {
        setMajorList(college[college.findIndex( item => item.name === e.target.value)].major)
        const origin_active = document.querySelectorAll(".active");
        if (origin_active.length >= 1 ) {
            origin_active[0].classList.remove("active")
        }
        e.target.classList.add("active");
        console.log(origin_active)
    }
    return(
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>회원가입</h1>
                <div>
                    <div className="inputRow">
                        <label>
                            이메일 주소
                            <ErrorMsg>{errors.email?.message}</ErrorMsg>
                        </label>
                        <input 
                            type="text" 
                            placeholder="이메일을 입력해주세요"
                            className={errors.email?"error":""}
                            {...register("email")}
                        />
                    </div>
                    <div className="half inputRow">
                        <div>
                            <label>
                                비밀번호
                                <ErrorMsg>{errors.password?.message}</ErrorMsg>
                            </label>
                            <input 
                                type="password" 
                                placeholder="비밀번호를 입력해주세요"
                                className={errors.password?"error":""}
                                {...register("password")}
                            />
                        </div>
                        <div>
                            <label>
                                비밀번호 확인
                                <ErrorMsg>{errors.passwordConfirm?.message}</ErrorMsg>
                            </label>
                            <input 
                                type="password" 
                                placeholder="비밀번호를 입력해주세요"
                                className={errors.passwordConfirm?"error":""}
                                {...register("passwordConfirm")}
                            />
                        </div>
                    </div>
                    <div className="half inputRow">
                        <div>
                            <label>
                                이름
                                <ErrorMsg>{errors.name?.message}</ErrorMsg>
                            </label>
                            <input 
                                type="text" 
                                placeholder="이름을 입력해주세요"
                                className={errors.name?"error":""}
                                {...register("name")}
                            />
                        </div>
                        <div>
                            <label>
                                학번
                                <ErrorMsg>{errors.studentId?.message}</ErrorMsg>
                            </label>
                            <input 
                                type="number" 
                                placeholder="학번을 입력해주세요"
                                className={errors.studentId?"error":""}
                                {...register("studentId")}
                            />
                        </div>
                    </div>
                    <div className="inputRow">
                        <label>
                            전공
                            <ErrorMsg>{errors.studentMajor?.message}</ErrorMsg>
                        </label>
                        <MajorContainer>
                            <CollegeBox>
                                {college.map(collegeItem => 
                                    <input 
                                        className="collegeBtn" 
                                        type="button" 
                                        value={collegeItem.name} 
                                        onClick={collegeClick}
                                />
                                )}
                            </CollegeBox>
                            <MajorBox>
                                {majorList?.map(majorItem => 
                                    <div className="option">
                                        <label>
                                            <input 
                                                className="majorBtn" 
                                                type="radio" 
                                                value={majorItem}
                                                {...register("studentMajor")}
                                            />
                                            {majorItem}
                                        </label>
                                    </div>
                                )}
                            </MajorBox>
                        </MajorContainer>
                    </div>
                    <input className="submit" type="submit" value="회원가입" />
                </div>
           </form>
        </Container>
    )
}
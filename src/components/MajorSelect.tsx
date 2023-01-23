import {  useState } from "react"
import styled from "styled-components"

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

const Container = styled.div`
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

export default function MajorSelect(){
    const [majorList,setMajorList] = useState<string[]>();
    function MajorResult() {
        return(
            <MajorBox>
                {majorList?.map(majorItem => 
                    <div className="option">
                        <label>
                            <input className="majorBtn" name="major" type="radio" value={majorItem}/>
                            {majorItem}
                        </label>
                    </div>
                )}
            </MajorBox>
        )
    }

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
            <CollegeBox>
                {college.map(collegeItem => 
                    <input className="collegeBtn" type="button" value={collegeItem.name} onClick={collegeClick}/>
                )}
            </CollegeBox>
            <MajorResult/>
        </Container>
    )
}
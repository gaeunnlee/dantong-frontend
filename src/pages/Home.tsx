import { faThumbsUp } from "@fortawesome/free-regular-svg-icons"
import { faChevronRight, faClock, faFlask, faLocationDot, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import Carousel from "../Carousel/Carousel"
const bestPostArray = [
    {   
        rank: 1,
        title: "건의제목 건의제목 건의제목",
        recommend: 50,
        date: "2022.06.25"
    },
    {   
        rank: 2,
        title: "건의제목 건의제목 건의제목",
        recommend: 40,
        date: "2022.06.25"
    },
    {   
        rank: 3,
        title: "건의제목 건의제목 건의제목",
        recommend: 30,
        date: "2022.06.25"
    },
    {   
        rank: 4,
        title: "건의제목 건의제목 건의제목",
        recommend: 20,
        date: "2022.06.25"
    },
    {   
        rank: 5,
        title: "건의제목 건의제목 건의제목",
        recommend: 10,
        date: "2022.06.25"
    },
]

const studyInfoArray = [
    {
        title: "Java 스터디 모집",
        dDay: 8,
        member: "2/5",
        content: "주 1회 모여서 공부할 분들을 구합니다! (입문자 환영)"
    },
    {
        title: "알고리즘 스터디 모집",
        dDay: 11,
        member: "1/6",
        content: "주 1회 모여서 공부할 분들을 구합니다! (입문자 환영)"
    },
    {
        title: "C++ 스터디 모집",
        dDay: 14,
        member: "2/5",
        content: "주 1회 모여서 공부할 분들을 구합니다! (입문자 환영)"
    },
    {
        title: "Python 스터디 모집",
        dDay: 14,
        member: "2/5",
        content: "주 1회 모여서 공부할 분들을 구합니다! (입문자 환영)"
    }
]

const Container = styled.div`
    padding: 30px 20px;
`
const CouncilPostBox = styled.div`
    margin-bottom: 40px;
`
const BoxTitle = styled.h1`
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    span {
        font-size: 17px;
        cursor: pointer;
        color: ${props => props.theme.themeColor};
        padding-right: 15px;
    }
`
const BestPostBox = styled.div`
    display: inline-block;
    min-width: 600px;
    width: 50%;
    padding-right: 20px;
    box-sizing: border-box;
`
const BestPostContent = styled.ul`
    background-color: #F0F4FF;
    border-radius: 15px;
    padding: 20px;
`
const PostList = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    border-bottom: 1px solid #a8aebd;
    div {
        display: flex;
        align-items: center;
    }
`
const Rank = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: #6D8398;
    margin-right: 20px;
`
const Title = styled.span`
    font-weight: bold;
`
const Recommend = styled.span`
    color: #E36363;
    margin-left: 10px;
`
const Date = styled.span`
    
`
const StudyPostBox = styled.div`
    min-width: 600px;
    box-sizing: border-box;
`
const StudyMenuBtn = styled.button`
    background-color: ${props => props.theme.themeColor};
    color: white;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px 15px;
    border: 0;
    margin-right: 15px;
    cursor: pointer;
    svg {
        margin-right: 10px;
    }
`
const StudyMenuMoreBtn = styled(StudyMenuBtn)`
    background-color: transparent;
    color: ${props => props.theme.themeColor};
    font-weight: bold;
`
const BottomContent = styled.div`
    display: flex;
`
const DoubleLayerContent = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 35px;
`
const StudyInfoContainer = styled.div`
    display: flex;
    overflow: hidden;
`
const StudyInfoItem = styled.div`
    height: 200px;
    width: 25%;
    display: flex;
    flex-direction: column; 
    margin-right: 20px;
`
const StudyTitleBox = styled.div`
    border-radius: 25px 25px 0 0;
    line-height: 60px;
    text-align: center;
    height: 60px;
    background-color: #727699;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0px 10px;
`
const StudyContentBox = styled.div`
    padding: 10px 20px;
    height: 140px;
    background-color: #EDEDED;
    border-radius: 0 0 25px 25px;
`
const StudyDetailBox = styled.div`
    color: #454A7F;
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
    font-weight: bold;
    svg {
        margin-right: 5px;
    }
`
const StudyContent = styled.p`
    margin-top: 15px;
    font-size: 18px;
    height: 60px;
    line-height: 25px;
`
export default function Home(){

  
    return(
        <Container>
            <CouncilPostBox>
                <BoxTitle>학생회가 전합니다</BoxTitle>
                <Carousel/>
            </CouncilPostBox>
            <BottomContent>
                <BestPostBox>
                    <BoxTitle>인기글</BoxTitle>
                    <BestPostContent>
                        {bestPostArray.map(item =>
                            <PostList>
                                <div>
                                    <Rank>{item.rank}</Rank>
                                    <Title>{item.title}</Title>
                                    <Recommend>
                                        <FontAwesomeIcon icon={faThumbsUp}/>
                                        {item.recommend}
                                    </Recommend>
                                </div>
                                <Date>{item.date}</Date>
                            </PostList>
                        )}
                    </BestPostContent>
                </BestPostBox>
                <DoubleLayerContent>
                    <StudyPostBox>
                        <BoxTitle>
                            모집 중인 스터디
                            <span>
                                더보기
                                <FontAwesomeIcon icon={faChevronRight}/>
                            </span>
                        </BoxTitle>
                        <StudyInfoContainer>
                            {studyInfoArray.map(item =>
                                <StudyInfoItem>
                                    <StudyTitleBox>{item.title}</StudyTitleBox>
                                    <StudyContentBox>
                                        <StudyDetailBox>
                                            <span>
                                                <FontAwesomeIcon icon={faClock} />
                                                D-{item.dDay}
                                            </span>
                                            <span>
                                                <FontAwesomeIcon icon={faUserGroup} />
                                                {item.member}
                                            </span>
                                        </StudyDetailBox>
                                        <StudyContent>
                                            {item.content}
                                        </StudyContent>
                                    </StudyContentBox>
                                </StudyInfoItem>
                            )}
                        </StudyInfoContainer>
                    </StudyPostBox>
                    <StudyPostBox>
                        <BoxTitle>
                            스터디 메뉴
                        </BoxTitle>
                        <StudyMenuBtn>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            장소 대여
                        </StudyMenuBtn>
                        <StudyMenuBtn>
                            <FontAwesomeIcon icon={faFlask}/>
                            물품 신청
                        </StudyMenuBtn>
                        <StudyMenuBtn>
                            <FontAwesomeIcon icon={faUser}/>
                            내 스터디
                        </StudyMenuBtn>
                        <StudyMenuMoreBtn>
                            <FontAwesomeIcon icon={faChevronRight}/> 더 보기
                        </StudyMenuMoreBtn>
                    </StudyPostBox>
                </DoubleLayerContent>
            </BottomContent>
        </Container>
    )
}
import { faPen, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Bar = styled.div`
    display:flex;
    width: 100%;
    height: 70px;
    padding: 20px 20px;
    box-sizing: border-box;
    justify-content: space-between;
    h2 {
        font-size: 30px;
        font-weight: bold;
        color: ${props => props.theme.logoColor}
    }
`
const SearchBox = styled.div`
    background-color:#edf4ff;
    padding: 0 15px;
    border-radius: 20px;
    font-size: 20px;
    line-height: 45px;
    height: 50px;
    color: ${props => props.theme.logoColor};
    input {
        margin-left: 10px;
        font-size: 18px;
        line-height: 30px;
        width: 200px;
        border: 0;
        background-color: transparent;
        &:focus {
            outline: none;
        }
    }
`
const PostingBtn = styled.button`
    background-color: #F0F4FF;
    border: 0;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    padding: 10px;
    color: ${props => props.theme.themeColor};
    font-size: 25px;
    &:hover {
        cursor: pointer;
    }
`

export default function Header(){
    return(
        <Bar>
            <h2>단통</h2>
            <SearchBox>
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" placeholder="검색어를 입력해주세요"/>
            </SearchBox>
            <PostingBtn>
                <FontAwesomeIcon icon={faPen} />
            </PostingBtn>
        </Bar>
    )
}
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Card } from "./card";
import { LeftArrow, RightArrow } from "./arrows";
import { useState } from "react";
import img1 from "../assets/image/post_1.jpg"
import img2 from "../assets/image/post_2.jpg"
import img3 from "../assets/image/post_3.jpg"
import img4 from "../assets/image/post_4.jpg"
import img5 from "../assets/image/post_5.jpg"
import usePreventBodyScroll from "./usePreventBodyScroll";

const councilPosts = [
    {postName: "재학생 집행부 모집", imgSrc: img1,},
    {postName: "DK콘", imgSrc: img2,},
    {postName: "새내기 정모", imgSrc: img3,},
    {postName: "학생회 조직도", imgSrc: img4,},
    {postName: "안과", imgSrc: img5,},
    {postName: "재학생 집행부 모집", imgSrc: img1,},
    {postName: "DK콘", imgSrc: img2,},
    {postName: "새내기 정모", imgSrc: img3,},
    {postName: "학생회 조직도", imgSrc: img4,},
    {postName: "안과", imgSrc: img5,},
]

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(councilPosts.length)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind), imgSrc: councilPosts[ind].imgSrc }));

export default function Carousel() {
  const [items] = useState(getItems);

    return(
        <div>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            options={{
                ratio: 0.9,
                rootMargin: "5px",
                threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
            }}
          >
            {items.map(({ id, imgSrc }) => (
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
                imgSrc={imgSrc}
              />
            ))}
          </ScrollMenu>
        </div>
    )
}
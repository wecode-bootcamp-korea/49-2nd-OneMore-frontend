import { useState, useEffect } from 'react';
import styled from 'styled-components';

function Feed() {
  const [getFeedData, setGetFeedData] = useState([]);
  useEffect(() => {
    fetch(`/data/feed.json`)
      .then(res => res.json())
      .then(data => {
        setGetFeedData(data.data);
      });
  }, []);
  console.log(getFeedData);

  // {myRoutineData.map(product => {
  //   const {
  //     routineId,
  //     routineName,
  //     totalDuration,
  //     exerciseNames,
  //     createDate,
  //   } = product;
  //   return (
  // "routineId": 1,
  //   "nickName": "권순우",
  //   "profileImage": "",
  //   "feedImage": "13:89",
  //   "content": "2023-10-23T03:48:12.000Z"
  return (
    <div>
      <ScrollContainer>
        <BackGroundContainer>
          <GridContainer>
            {getFeedData.map(product => {
              const { routineId, nickName, profileImage, feedImage, content } =
                product;
              return (
                <One key={routineId}>
                  <FeedImage alt={nickName} src={feedImage}></FeedImage>
                </One>
              );
            })}
          </GridContainer>
        </BackGroundContainer>
      </ScrollContainer>
    </div>
  );
}
export default Feed;

const ScrollContainer = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
  height: 700px;
  overflow: auto;
`;
const BackGroundContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 16px;
  margin-top: 30px;
  height: 75vh;
  position: relative;
`;

const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);

  height: 480px;
  border-radius: 16px;
  position: relative;
  top: 50px;
`;

// const Container = styled.div`
//   width: 100%;
//   background-color: pink;
//   height: 223px;
//   border-radius: 16px;

//   position: relative;
// `;

const One = styled.div`
  /* border-bottom: 1px solid blue;
  border-right: 1px solid blue; */
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  overflow: auto;
`;

const FeedImage = styled.img`
  height: 110px;
  width: 110px;
`;

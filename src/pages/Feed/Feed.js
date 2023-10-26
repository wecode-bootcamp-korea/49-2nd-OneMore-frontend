import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal/Modal';

function Feed() {
  const [getFeedData, setGetFeedData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    fetch(`/data/feed.json`)
      .then(res => res.json())
      .then(data => {
        setGetFeedData(data.data);
      });
  }, []);

  return (
    <div>
      <BackGroundContainer>
        <ScrollContainer>
          <GridContainer>
            {getFeedData.map(product => {
              const { routineId, nickName, profileImage, feedImage, content } =
                product;
              return (
                <One
                  key={routineId}
                  onClick={() => {
                    isModalOpen && <Modal />;
                  }}
                >
                  <FeedImage alt={nickName} src={feedImage}></FeedImage>
                </One>
              );
            })}
          </GridContainer>
        </ScrollContainer>
      </BackGroundContainer>
    </div>
  );
}
export default Feed;

const BackGroundContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  margin: 30px 15px 0 15px;
  height: 75vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ScrollContainer = styled.div`
  width: 100%;
  height: 600px;
  overflow: auto;
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
  border: 0.25px solid gray;
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

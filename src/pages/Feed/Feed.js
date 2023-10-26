import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Feed() {
  const [getFeedData, setGetFeedData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const listBox = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get('page') || '1';
  const limit = queryParams.get('limit') || '12';

  const handleModalOpen = feed => {
    setSelectedFeed(feed);
    checkPermission();
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  let test = 0; // 조건

  const checkPermission = () => {
    if (test === 0) {
      //구독조건 넣어주기 나중에
      setIsModalOpen(!hasPermission);
    } else {
      alert('구독 서비스 입니다');
    }
  };

  const getFeedDataList = () => {
    const fetchURL = `/data/feed.json`;

    fetch(fetchURL, {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        const newFeeds = result.data;
        setGetFeedData(prevFeedsData => [...prevFeedsData, ...newFeeds]);
      });
  };
  useEffect(() => {
    getFeedDataList();
  }, []);

  const handleScroll = () => {
    if (
      listBox.current.scrollHeight - listBox.current.scrollTop ===
      listBox.current.clientHeight
    ) {
      getFeedDataList();
      navigate(`/feed?page=${parseInt(page) + 1}&limit=${limit}`);
    }
  };

  return (
    <ExerciseStartStyle>
      <PaddingContainer ref={listBox} onScroll={handleScroll}>
        <GridContainer>
          {getFeedData.map(product => {
            const { routineId, nickName, profileImage, feedImage, content } =
              product;
            return (
              <FeedBorder
                key={routineId}
                onClick={() => {
                  handleModalOpen(product);
                }}
              >
                <FeedImage alt={nickName} src={feedImage}></FeedImage>
              </FeedBorder>
            );
          })}
        </GridContainer>
      </PaddingContainer>

      {isModalOpen && (
        <FeedModal>
          <TopWrapper>
            <UserWrapper>
              <ProfileWrapper>
                <ProfileImage
                  alt="프로필 사진"
                  src={selectedFeed?.profileImage}
                ></ProfileImage>
              </ProfileWrapper>
              <NickName>{selectedFeed?.nickName}</NickName>
            </UserWrapper>
            <ButtonWrapper>
              <ExitButton onClick={handleModalClose}>X</ExitButton>
            </ButtonWrapper>
          </TopWrapper>
          <FeedImageWrapper>
            <FeedImage alt="피드 이미지" src={selectedFeed?.feedImage} />
          </FeedImageWrapper>
          <ContentWrapper>
            <HeartWrapper onClick={handleLike}>
              {isLiked ? (
                <FilledHeart alt="하트" src="/images/heart.png" />
              ) : (
                <EmptyHeart alt="빈하트" src="/images/emptyHeart.png" />
              )}
            </HeartWrapper>
            <Comment>{selectedFeed?.content}</Comment>
          </ContentWrapper>
        </FeedModal>
      )}

      <MakeRoutineButton>글쓰기</MakeRoutineButton>
    </ExerciseStartStyle>
  );
}
export default Feed;

const ExerciseStartStyle = styled.div``;

const PaddingContainer = styled.div`
  width: 100%;
  padding: 0 15px 0 15px;
  height: 580px;
  overflow: auto;
  margin-top: 60px;
  background-color: white;
  border-radius: 16px;
`;

const MakeRoutineButton = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.green};
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  position: absolute;
  right: 25px;
  bottom: 20px;
  top: calc(100% - 60px);
  right: 25px;
`;

const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border-radius: 16px;
  position: relative;
  cursor: pointer;
`;

const FeedBorder = styled.div`
  border: 0.25px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

const FeedImage = styled.img`
  height: 100%;
  width: 100%;
`;

const FeedModal = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 500px;
  width: 80%;
  box-shadow: 5px 5px 5px 1px gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 20px 0 20px;
`;

const ProfileWrapper = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const UserWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const NickName = styled.p`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  line-height: 1.2;
  margin-left: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
const ExitButton = styled.button`
  font-size: 25px;
`;

const FeedImageWrapper = styled.div`
  margin-top: 10px;
  height: 40%;
  padding: 5px;
  border-bottom: 0.25px solid gray;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  gap: 8px;
  padding: 15px 15px 0px 15px;
  overflow-y: auto;
`;

const Comment = styled.p`
  font-size: 16px;
  white-space: pre-line;
  word-break: break-all;
`;

const HeartWrapper = styled.div``;
const FilledHeart = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const EmptyHeart = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

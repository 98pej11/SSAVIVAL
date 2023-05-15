import React, { useCallback, useEffect } from "react";
import { useState, useMemo } from "react";
import { useSpring, animated, Any } from "react-spring";
import { StyledEngineProvider, styled } from "@mui/material/styles";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Puzzle() {
  // 이미지
  const [images, setImages] = useState([]);
  // 정답 개수 카운트
  const [count, setCount] = useState(0);
  // 성공 메세지 플래그
  const [showSuccess, setShowSuccess] = useState(false);
  // 성공 표시 함수
  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        setShowSuccess(false);
      }, 500);
    }
  });
  // 퍼즐판
  useEffect(() => {
    const fetchImages = async () => {
      console.log("나 이미지 변경됐어");

      // 이미지 6분할
      const newImages = await CutImages("pompom.png");
      console.log("함수 끝나고 newImages는", newImages);
      // 이미지 6분할한 것 저장
      setImages(newImages);
      console.log("흠.........", images);
      const updateState = {
        items1: [
          { id: "items5", content: "Item 5", imgUrl: newImages[1] },
          { id: "items9", content: "Item 9", imgUrl: newImages[5] },
        ],
        items2: [
          { id: "items6", content: "Item 6", imgUrl: newImages[2] },
          { id: "items8", content: "Item 8", imgUrl: newImages[4] },
        ],
        items3: [
          { id: "items4", content: "Item 4", imgUrl: newImages[0] },
          { id: "items7", content: "Item 7", imgUrl: newImages[3] },
        ],
        items4: [],
        items5: [],
        items6: [],
        items7: [],
        items8: [],
        items9: [],
      };
      setState(updateState);
      console.log("the latest", state.items1);
    };
    if (images.length === 0) {
      fetchImages();
    }
  }, []);

  // 이미지 6분할 하는 함수
  const CutImages = async (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = src;
      const newImages = [];
      img.onload = () => {
        console.log("Have you entered the onload function?");
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        // fill the image
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 2; j++) {
            const x = (j * img.width) / 2;
            const y = (i * img.height) / 3;
            const width = img.width / 2;
            const height = img.height / 2;
            const data = ctx.getImageData(x, y, width, height);
            const canvas2 = document.createElement("canvas");
            canvas2.width = width;
            canvas2.height = height;
            const ctx2 = canvas2.getContext("2d");
            ctx2.putImageData(data, 0, 0);
            const image = canvas2.toDataURL();
            newImages.push(image);
          }
        }
        resolve(newImages);
        console.log("cut이미지 끝나고", newImages);
      };
    });
  };

  // 퍼즐판 이동 현황
  const [state, setState] = useState({
    items1: [
      { id: "items5", content: "Item 5", imgUrl: images[1] },
      { id: "items9", content: "Item 9", imgUrl: images[5] },
      // { id: "items8", content: "Item 8", imgUrl: images[4] },
    ],
    items2: [
      { id: "items6", content: "Item 6", imgUrl: images[2] },
      { id: "items8", content: "Item 8", imgUrl: images[4] },
      // { id: "items4", content: "Item 4", imgUrl: images[0] },
    ],
    items3: [
      { id: "items4", content: "Item 4", imgUrl: images[0] },
      { id: "items7", content: "Item 7", imgUrl: images[3] },
      // { id: "items10", content: "Item 10", imgUrl: images[6] },
    ],
    items4: [],
    items5: [],
    items6: [],
    items7: [],
    items8: [],
    items9: [],
    // items10: [],
    // items11: [],
    // items12: [],
  });
  console.log(state);

  useEffect(() => {
    if (state.items4.some((item) => item.id === "items4")) {
      console.log("4");
      isRightAnswer("items4");
    }
    if (
      state.items5.some((item) => item.id === "items5") &&
      check.items5 === false
    ) {
      console.log("5");
      isRightAnswer("items5");
    }
    if (
      state.items6.some((item) => item.id === "items6") &&
      check.items6 === false
    ) {
      console.log("6");
      isRightAnswer("items6");
    }
    if (
      state.items7.some((item) => item.id === "items7") &&
      check.items7 === false
    ) {
      console.log("7");
      isRightAnswer("items7");
    }
    if (
      state.items8.some((item) => item.id === "items8") &&
      check.items8 === false
    ) {
      console.log("8");
      isRightAnswer("items8");
    }
    if (
      state.items9.some((item) => item.id === "items9") &&
      check.items9 === false
    ) {
      console.log("9");
      isRightAnswer("items9");
    }
  }, [
    state.items4,
    state.items5,
    state.items6,
    state.items7,
    state.items8,
    state.items9,
  ]);

  const [check, setCheck] = useState({
    items4: false,
    items5: false,
    items6: false,
    items7: false,
    items8: false,
    items9: false,
  });

  // check 값 변경하는 함수
  const updateCheck = (item) => {
    setCheck({ ...check, [item]: true });
  };

  const [droppableIDs, setDroppableIDs] = useState([
    "items1",
    "items2",
    "items3",
    "items4",
    "items5",
    "items6",
    "items7",
    "items8",
    "items9",
    // "items10",
    // "items11",
    // "items12",
  ]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // 드래그앤드롭이 시작된 droppable과 끝난 droppable이 다른 경우
    if (!destination) {
      return;
    }

    // 같은 droppable 내에서 요소를 이동하는 경우
    if (source.droppableId === destination.droppableId) {
      // const items = reorder(
      //   state[source.droppableId],
      //   source.index,
      //   destination.index
      // );
      // setState({
      //   ...state,
      //   [source.droppableId]: items,
      // });
    } else {
      // 다른 droppable로 요소를 이동하는 경우
      const result = move(
        state[source.droppableId],
        state[destination.droppableId],
        source,
        destination
      );
      console.log(
        "move 다음 일이다....",
        result[source.droppableId],
        result[destination.droppableId]
      );
      if (true) {
        setState({
          ...state,
          [source.droppableId]: result[source.droppableId],
          [destination.droppableId]: result[destination.droppableId],
        });
        console.log("트루일뗴??");
      }

      // setShowSuccess(true);
      // setCount(count + 1);
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
  };

  const isRightAnswer = (id) => {
    console.log("함수에 들어오긴하니????");
    console.log("정답이다!!!!!!!!!!!!!");
    // 정답 표시해줌
    setShowSuccess(true);
    // 카운트 up (종료조건)
    setCount(count + 1);
    // 상태값 true로 변경
    updateCheck(id);
    return true;
  };
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // const drawFn = (e) => {
  //   const rect = canvasRef.current.getBoundingClientRect();
  //   const scaleX = canvasRef.current.width / rect.width;
  //   const scaleY = canvasRef.current.height / rect.height;
  //   const x = (e.clientX - rect.left) * scaleX;
  //   const y = (e.clientY - rect.top) * scaleY;
  //   setMousePos({ x, y });
  // };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className="puzzle"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <img src="flip.svg" style={{ position: "absolute", width: "80%" }} />
        <QuizSide>
          {droppableIDs.slice(0, 3).map((droppableID, index) => (
            <Droppable key={droppableID} droppableId={droppableID}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    // backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                    padding: 4,
                    // width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  {state[droppableID].map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <img
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          src={item.imgUrl}
                          alt={item.name}
                          crossorigin={"anonymous"}
                          // style={{ width: "60px", height: "60px" }}
                        ></img>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </QuizSide>
        <div>{showSuccess && <Success>성공!!! </Success>}</div>
        <img
          src="sign.svg"
          style={{ width: "100px", position: "absolute", top: 130 }}
        />
        <AnswerSide>
          <AnswerRow>
            {[3, 4].map((idx) => (
              <EachAnswer key={idx}>
                <Droppable
                  droppableId={droppableIDs[idx]}
                  isDropDisabled={state[`items${idx + 1}`].length > 0}
                >
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        backgroundColor: snapshot.isDraggingOver
                          ? "blue"
                          : "grey",
                        // padding: 4,
                        width: "80px",
                        // height: 60,
                      }}
                    >
                      {state[`items${idx + 1}`].map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                          isDragDisabled={
                            check[droppableIDs[idx]] ||
                            droppableIDs[idx] === item.id
                          }
                        >
                          {(provided, snapshot) => (
                            <img
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              src={item.imgUrl}
                              alt={item.name}
                              style={{
                                ...provided.draggableProps.style,
                                width: "80px",
                              }}
                            ></img>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </EachAnswer>
            ))}
          </AnswerRow>

          <AnswerRow>
            {[5, 6].map((idx) => (
              <EachAnswer key={idx}>
                <Droppable
                  droppableId={droppableIDs[idx]}
                  isDropDisabled={state[`items${idx + 1}`].length > 0}
                >
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        backgroundColor: snapshot.isDraggingOver
                          ? "blue"
                          : "grey",
                        padding: 4,
                        width: "80px",
                        // height: 60,
                      }}
                    >
                      {state[`items${idx + 1}`].map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                            isDragDisabled={
                              check[droppableIDs[idx]] ||
                              droppableIDs[idx] === item.id
                            }
                          >
                            {(provided, snapshot) => (
                              <img
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                src={item.imgUrl}
                                alt={item.name}
                                style={{
                                  ...provided.draggableProps.style,
                                  width: "80px",
                                }}
                              ></img>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </EachAnswer>
            ))}
          </AnswerRow>

          <AnswerRow>
            {[7, 8].map((idx) => (
              <EachAnswer key={idx}>
                <Droppable
                  droppableId={droppableIDs[idx]}
                  isDropDisabled={state[`items${idx + 1}`].length > 0}
                >
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        backgroundColor: snapshot.isDraggingOver
                          ? "blue"
                          : "grey",
                        padding: 4,
                        width: "80px",
                        // height: 60,
                      }}
                    >
                      {state[`items${idx + 1}`].map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                          // isDragDisabled={isRightAnswer(droppableIDs[0], item.id)}
                          isDragDisabled={
                            check[droppableIDs[idx]] ||
                            droppableIDs[idx] === item.id
                          }
                        >
                          {(provided, snapshot) => (
                            <img
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              src={item.imgUrl}
                              alt={item.name}
                              style={{
                                ...provided.draggableProps.style,
                                width: "80px",
                              }}
                            ></img>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </EachAnswer>
            ))}
          </AnswerRow>
        </AnswerSide>
      </div>
    </DragDropContext>
  );
}

const QuizSide = styled(`div`)({
  display: "flex",
  width: "50%",
  height: "35%",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10%",
  marginTop: "7%",
  // marginLeft: "%",
  position: "relative",
  // alignContent: "center",
  // backgroundColor: "skyblue",
  flex: "1",
  left: 0,
});
const AnswerSide = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  width: "45%",
  height: "45%",
  // padding: "10%",
  alignContent: "center",
  position: "relative",
  marginTop: "7%",
  // marginLeft: "5%",
  flex: "1",
  // backgroundColor: "blue",
});
const AnswerRow = styled(`div`)({
  width: "100%",
  height: "80px",
  // backgroundColor: "lightCoral",

  display: "flex",
  flexDirection: "row",
  // justifyContent: "space-evenly",
  marginBottom: "5px",
});

const EachAnswer = styled(`div`)({
  width: "80px",
  // height: "80px",
  // backgroundColor: "lightCoral",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: "5px",
  marginRight: "5px",
  // flex: "2",
});

const Success = styled(`div`)({
  width: "600px",
  position: "absolute",
  fontSize: "60pt",
  color: "red",
  zIndex: "20",
  fontFamily: "neodgm",
  // fontSize: 1.7rem;
  // color: black;
});

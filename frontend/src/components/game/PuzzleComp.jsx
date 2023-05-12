import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useSpring, animated, Any } from "react-spring";
import { StyledEngineProvider, styled } from "@mui/material/styles";
import pepe_sad from "../../assets/pepe_sad.png";
import pepe_finding from "../../assets/pepe_finding.svg";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Puzzle() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      console.log("나 이미지 변경됐어");
      const newImages = await CutImages("child_pepe.png");

      console.log("나 유즈이펙트 안의 이미지야", newImages);
      setImages(newImages);
      const updateState = {
        items1: [
          { id: "items5", content: "Item 5", imgUrl: newImages[1] },
          { id: "items11", content: "Item 11", imgUrl: newImages[7] },
          { id: "items8", content: "Item 8", imgUrl: newImages[4] },
        ],
        items2: [
          { id: "items6", content: "Item 6", imgUrl: newImages[2] },
          { id: "items12", content: "Item 12", imgUrl: newImages[8] },
          { id: "items4", content: "Item 4", imgUrl: newImages[0] },
        ],
        items3: [
          { id: "items9", content: "Item 9", imgUrl: newImages[5] },
          { id: "items7", content: "Item 7", imgUrl: newImages[3] },
          { id: "items10", content: "Item 10", imgUrl: newImages[6] },
        ],
        items4: [],
        items5: [],
        items6: [],
        items7: [],
        items8: [],
        items9: [],
        items10: [],
        items11: [],
        items12: [],
      };
      setState(updateState);
      console.log("the latest", state.items1);
    };
    if (images.length === 0) {
      fetchImages();
    }
  }, []);

  const CutImages = async (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = src;
      const newImages = [];
      img.onload = () => {
        console.log("onload 함수에 들어왔습니다?");
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        // 이미지 채워넣기
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            const x = (j * img.width) / 3;
            const y = (i * img.height) / 3;
            const width = img.width / 3;
            const height = img.height / 3;
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
      };
    });
  };

  const [state, setState] = useState({
    items1: [
      { id: "items5", content: "Item 5", imgUrl: images[1] },
      { id: "items11", content: "Item 11", imgUrl: images[7] },
      { id: "items8", content: "Item 8", imgUrl: images[4] },
    ],
    items2: [
      { id: "items6", content: "Item 6", imgUrl: images[2] },
      { id: "items12", content: "Item 12", imgUrl: images[8] },
      { id: "items4", content: "Item 4", imgUrl: images[0] },
    ],
    items3: [
      { id: "items9", content: "Item 9", imgUrl: images[5] },
      { id: "items7", content: "Item 7", imgUrl: images[3] },
      { id: "items10", content: "Item 10", imgUrl: images[6] },
    ],
    items4: [],
    items5: [],
    items6: [],
    items7: [],
    items8: [],
    items9: [],
    items10: [],
    items11: [],
    items12: [],
  });
  console.log(state);

  const [check, setCheck] = useState({
    items4: false,
    items5: false,
    items6: false,
    items7: false,
    items8: false,
    items9: false,
    items10: false,
    items11: false,
    items12: false,
  });

  // check 값 변경하는 함수
  const updateCheck = (id) => {
    setCheck({ ...check, id: true });
  };
  const [droppableIDs, setDroppableIDs] = useState([
    "items4",
    "items5",
    "items6",
    "items7",
    "items8",
    "items9",
    "items10",
    "items11",
    "items12",
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
        result[destination.droppableId].id
      );
      if (true) {
        setState({
          ...state,
          [source.droppableId]: result[source.droppableId],
          [destination.droppableId]: result[destination.droppableId],
        });
      }
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

  const isRightAnswer = (droppableId, id) => {
    console.log("나 id야", id);
    console.log("나 droppableId야", droppableId);
    console.log("난 true게 false게", droppableId == id);
    if (droppableId == id) {
      // 정답
      updateCheck(droppableId);
      console.log("체크가 바뀔지아닐지===", check);
      console.log("얜 트룬지 폴슨지 ", check[droppableIDs[0]]);
      return true;
    }
    return false;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          display: "flex",
          // justifyContent: "space-around",
          width: "1200px",
          height: "600px",
          backgroundColor: "white",
          // backgroundColor: "",
        }}
      >
        <QuizSide>
          {/* <img src={images[1]} /> */}
          <Droppable droppableId="items1">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                  padding: 4,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {state.items1.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <img
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        src={item.imgUrl}
                        alt={item.name}
                        crossorigin={"anonymous"}
                      ></img>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="items2">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                  padding: 4,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {state.items2.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <img
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        src={item.imgUrl}
                        alt={item.name}
                      ></img>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="items3">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                  padding: 4,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {state.items3.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <img
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        src={item.imgUrl}
                        alt={item.name}
                      ></img>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </QuizSide>

        <AnswerSide>
          <AnswerRow>
            <EachAnswer>
              <Droppable
                droppableId={droppableIDs[0]}
                // isDropDisabled={check.items4 > 0}
                isDropDisabled={state.items4.length > 0}
                // 주석 윗줄 안먹고 무한루프 돎 5/9
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
                    {state.items4.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        // isDragDisabled={isRightAnswer(droppableIDs[0], item.id)}
                        isDragDisabled={
                          check[droppableIDs[0]] || droppableIDs[0] === item.id
                        }
                      >
                        {(provided, snapshot) => (
                          <img
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            src={item.imgUrl}
                            alt={item.name}
                          ></img>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable
                droppableId={droppableIDs[1]}
                isDropDisabled={state.items5.length > 0}
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
                    {state.items5.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        isDragDisabled={
                          check[droppableIDs[1]] || droppableIDs[1] === item.id
                        }
                      >
                        {(provided, snapshot) => (
                          <img
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            src={item.imgUrl}
                            alt={item.name}
                          ></img>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable
                droppableId={droppableIDs[2]}
                isDropDisabled={state.items6.length > 0}
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
                    {state.items6.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        isDragDisabled={
                          check[droppableIDs[2]] || droppableIDs[2] === item.id
                        }
                      >
                        {(provided, snapshot) => (
                          <img
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            src={item.imgUrl}
                            alt={item.name}
                          ></img>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>
          </AnswerRow>

          <AnswerRow>
            <EachAnswer>
              <Droppable
                droppableId={droppableIDs[3]}
                isDropDisabled={state.items7.length > 0}
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
                    {state.items7.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        isDragDisabled={
                          check[droppableIDs[3]] || droppableIDs[3] === item.id
                        }
                      >
                        {(provided, snapshot) => (
                          <img
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            src={item.imgUrl}
                            alt={item.name}
                          ></img>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable
                droppableId={droppableIDs[4]}
                isDropDisabled={state.items8.length > 0}
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
                    {state.items8.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        isDragDisabled={
                          check[droppableIDs[4]] || droppableIDs[4] === item.id
                        }
                      >
                        {(provided, snapshot) => (
                          <img
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            src={item.imgUrl}
                            alt={item.name}
                          ></img>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable
                droppableId={droppableIDs[5]}
                isDropDisabled={state.items9.length > 0}
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
                    {state.items9.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        isDragDisabled={
                          check[droppableIDs[5]] || droppableIDs[5] === item.id
                        }
                      >
                        {(provided, snapshot) => (
                          <img
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            src={item.imgUrl}
                            alt={item.name}
                          ></img>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>
          </AnswerRow>

          <AnswerRow>
            <EachAnswer>
              <Droppable
                droppableId={droppableIDs[6]}
                isDropDisabled={state.items10.length > 0}
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
                    {state.items10.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        isDragDisabled={
                          check[droppableIDs[6]] || droppableIDs[6] === item.id
                        }
                      >
                        {(provided, snapshot) => (
                          <img
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            src={item.imgUrl}
                            alt={item.name}
                          ></img>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable
                droppableId={droppableIDs[7]}
                isDropDisabled={state.items11.length > 0}
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
                    {state.items11.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        isDragDisabled={
                          check[droppableIDs[7]] || droppableIDs[7] === item.id
                        }
                      >
                        {(provided, snapshot) => (
                          <img
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            src={item.imgUrl}
                            alt={item.name}
                          ></img>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable
                droppableId={droppableIDs[8]}
                isDropDisabled={state.items12.length > 0}
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
                    {state.items12.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                        isDragDisabled={
                          check[droppableIDs[8]] || droppableIDs[8] === item.id
                        }
                      >
                        {(provided, snapshot) => (
                          <img
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            src={item.imgUrl}
                            alt={item.name}
                            // style={{ width: "1px", margin: "0" }}
                          ></img>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>
          </AnswerRow>
        </AnswerSide>
      </div>
    </DragDropContext>
  );
}

const QuizSide = styled(`div`)({
  display: "flex",
  width: "50%",
  height: "80%",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10%",
  // alignContent: "center",
  // backgroundColor: "skyblue",
  flex: "1",
});
const AnswerSide = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "80%",
  padding: "10%",
  alignContent: "center",
  // backgroundColor: "pink",
  // padding: "20px",
  flex: "1",
});
const AnswerRow = styled(`div`)({
  width: "300px",
  height: "80px",
  // backgroundColor: "lightCoral",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginBottom: "5px",
  flex: "2",
});

const EachAnswer = styled(`div`)({
  width: "80px",
  height: "80px",
  // backgroundColor: "lightCoral",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: "5px",
  // flex: "2",
});

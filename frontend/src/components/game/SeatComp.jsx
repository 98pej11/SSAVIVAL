import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useSpring, animated, Any } from "react-spring";
import { StyledEngineProvider, styled } from "@mui/material/styles";
import pepe_sad from "../../assets/pepe_sad.png";
import pepe_finding from "../../assets/pepe_finding.svg";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Seating() {
  // 카드 위치 좌표
  // const [position, setPosition] = useState({ x: 0, y: -300 }); // box의 포지션 값
  const cnt = 0;
  // const [seats, setSeats] = useState({
  //   seat1:[{seat1:false, seat1:"닉넴"}],
  //   seat2:[{seat2:false, seat2:""}],
  //   seat3:[{seat3:false, seat3:"닉넴"}],
  //   seat1:[{seat1:false, seat1:"닉넴"}],
  //   seat1:[{seat1:false, seat1:"닉넴"}],
  //   seat1:[{seat1:false, seat1:"닉넴"}],
  //   seat1:[{seat1:false, seat1:"닉넴"}],
  //   seat1:[{seat1:false, seat1:"닉넴"}],
  //   seat1:[{seat1:false, seat1:"닉넴"}],
  //   seat1:[{seat1:false, seat1:"닉넴"}],
  //   seat1:[{seat1:false, seat1:"닉넴"}],

  // });

  const [seats, setSeats] = useState([]);
  const selectIndex = (selectingNumber) => {
    let temp = Array.from({ length: 15 }, (v, i) => i);
    console.log(
      "난temp야ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ",
      temp
    );
    let randomIndexArray = [];
    while (randomIndexArray.length <= selectingNumber) {
      var movenum = temp.splice(Math.floor(Math.random() * temp.length), 1)[0];
      if (!(movenum in randomIndexArray)) {
        console.log("아직 다 안 차서 얘를 랜덤 배열에 넣어줄 것임 ", movenum);
        randomIndexArray.push(movenum);
      }
      if (randomIndexArray.length === selectingNumber) {
        console.log(
          "다찼다 나가~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
        );
        break;
      }
    }
    return randomIndexArray;
  };

  // while (cnt < 6) {
  //   // 6-cnt번째 회차에 6-cnt개의 빈 자리의 인덱스 배열
  //   let randomIndexArray = selectIndex(seats, 6 - cnt);

  //   cnt += 1;
  // }
  // const cardPos = useSpring({ x: Math.floor(Math.random() * 600), y: -250 });

  // const randomIndexArray = [];
  const [randomIndexArray, setRandomIndexArray] = useState([]);
  const [state, setState] = useState({
    items1: [
      {
        id: "item-1",
        content: "",
        imageUrl: "exploding-head.svg",
      },
      { id: "item-2", content: "", imageUrl: "drooling-face.svg" },
      { id: "item-3", content: "", imageUrl: "face-screaming-in-fear.svg" },
      { id: "item-4", content: "", imageUrl: "pleading-face.svg" },
      { id: "item-5", content: "", imageUrl: "disguised-face.svg" },
      { id: "item-6", content: "", imageUrl: "loudly-crying-face.svg" },
    ],
    items2: [],
    items3: [],
    items4: [],
    items5: [],
    items6: [],
    items7: [],
    items8: [],
    items9: [],
    items10: [],
    items11: [],
    items12: [],
    items13: [],
    items14: [],
    items15: [],
    items16: [],
  });

  // 성공 메세지 플래그
  const [showSuccess, setShowSuccess] = useState(false);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // 드래그앤드롭이 시작된 droppable과 끝난 droppable이 다른 경우
    if (!destination) {
      return;
    }
    if (result.destination && result.destination.droppableId === "items2") {
      console.log("여기드러오나...................");
    }
    // 같은 droppable 내에서 요소를 이동하는 경우
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        state[source.droppableId],
        source.index,
        destination.index
      );

      setState({
        ...state,
        [source.droppableId]: items,
      });
    } else {
      // 다른 droppable로 요소를 이동하는 경우
      const result = move(
        state[source.droppableId],
        state[destination.droppableId],
        source,
        destination
      );

      setState({
        ...state,
        [source.droppableId]: result[source.droppableId],
        [destination.droppableId]: result[destination.droppableId],
      });
      setShowSuccess(true);
    }
  };
  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        setShowSuccess(false);
      }, 500);
    }
  });
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

  useEffect(() => {
    let temp = new Array(15).fill(false);
    setRandomIndexArray(selectIndex(6));
  }, []);

  useEffect(() => {
    let temp = new Array(15).fill(false);
    var step;
    temp[0] = true;
    for (step = 0; step < 6; step++) {
      var idx = randomIndexArray[step];
      temp[idx] = true;
    }
    setSeats([...temp, ...seats]);
  }, [randomIndexArray]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          userSelect: "none",
          width: "1200px",
          height: "600px",
          backgroundColor: "white",
          display: "flex",
          backgroundImage: `url(${"floor.png"})`,
          // justifyContent: "center",
        }}
      >
        <Droppable droppableId="items1">
          {(provided, snapshot) => (
            <WaitingLine
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                // backgroundColor: snapshot.isDraggingOver ? "gray" : "yellpw",
                padding: 4,
                width: 250,
                minHeight: 50,
              }}
            >
              {state.items1.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => {
                    const imageStyle = {
                      backgroundImage: `url(${item.imageUrl})`,
                      // backgroundImage: `url("../../assets/pepe_finding.svg")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      userSelect: "none",
                      padding: 16,
                      margin: "0 0 8px 0",
                      minHeight: "50px",
                      height: "50px",
                      ...provided.draggableProps.style,
                    };
                    return (
                      <Waiting
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={imageStyle}
                      >
                        {item.content}
                      </Waiting>
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </WaitingLine>
          )}
        </Droppable>

        <AllArea>
          <LeftSide>
            {/* 1분단 */}
            <First>
              <FirstSet>
                <FirstSetset style={{ marginBottom: "5px" }}>
                  {seats[0] ? (
                    <Droppable
                      droppableId="items2"
                      isDropDisabled={state.items2.length > 0}
                    >
                      {(provided, snapshot) => (
                        <Empty
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {state.items2.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <Chair
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    backgroundColor: snapshot.isDragging
                                      ? "pink"
                                      : "green",
                                    width: "50px",
                                    height: "50px",
                                    backgroundImage: `url(${"flushed-face.svg"})`,
                                  }}
                                >
                                  {item.content}
                                </Chair>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </Empty>
                      )}
                    </Droppable>
                  ) : (
                    <Chair>의자</Chair>
                  )}

                  {seats[1] ? (
                    <Droppable droppableId="items3">
                      {(provided, snapshot) => (
                        <Empty
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            width: "50px",
                            height: "30px",
                            border: "2px solid black",
                            borderRadius: "30%",
                            backgroundColor: "gray",
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          {state.items3.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <Chair
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                  }}
                                >
                                  {item.content}
                                </Chair>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </Empty>
                      )}
                    </Droppable>
                  ) : (
                    <Chair>
                      <EmptyPerson>
                        <img src="flushed-face.svg" style={{ width: "50px" }} />{" "}
                      </EmptyPerson>
                    </Chair>
                  )}
                </FirstSetset>

                <NormalTable></NormalTable>
                <FirstSetset style={{ marginTop: "5px" }}>
                  {seats[2] ? (
                    <Droppable droppableId="items4">
                      {(provided, snapshot) => (
                        <Empty
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            width: "50px",
                            height: "30px",
                            border: "2px solid black",
                            borderRadius: "30%",
                            backgroundColor: "gray",
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          {state.items4.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <Chair
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                  }}
                                >
                                  {item.content}
                                </Chair>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </Empty>
                      )}
                    </Droppable>
                  ) : (
                    <Chair>
                      <EmptyPerson>
                        <img
                          src="astonished-face.svg"
                          style={{ width: "50px" }}
                        />{" "}
                      </EmptyPerson>
                    </Chair>
                  )}

                  {seats[3] ? (
                    <Droppable droppableId="items5">
                      {(provided, snapshot) => (
                        <Empty
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            width: "50px",
                            height: "30px",
                            border: "2px solid black",
                            borderRadius: "30%",
                            backgroundColor: "gray",
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          {state.items5.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <Chair
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                  }}
                                >
                                  {item.content}
                                </Chair>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </Empty>
                      )}
                    </Droppable>
                  ) : (
                    <Chair>
                      <EmptyPerson>
                        <img
                          src="cowboy-hat-face.svg"
                          style={{ width: "50px" }}
                        />{" "}
                      </EmptyPerson>
                    </Chair>
                  )}
                </FirstSetset>
              </FirstSet>

              <FirstSet>
                <FirstSetset style={{ marginBottom: "5px" }}>
                  {seats[4] ? (
                    <Droppable droppableId="items6">
                      {(provided, snapshot) => (
                        <Empty
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            width: "50px",
                            height: "30px",
                            border: "2px solid black",
                            borderRadius: "30%",
                            backgroundColor: "gray",
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          {state.items6.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <Chair
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                  }}
                                >
                                  {item.content}
                                </Chair>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </Empty>
                      )}
                    </Droppable>
                  ) : (
                    <Chair>
                      {" "}
                      <EmptyPerson>
                        <img
                          src="smirking-face.svg"
                          style={{ width: "50px" }}
                        />{" "}
                      </EmptyPerson>
                    </Chair>
                  )}

                  {seats[5] ? (
                    <Droppable droppableId="items7">
                      {(provided, snapshot) => (
                        <Empty
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            width: "50px",
                            height: "30px",
                            border: "2px solid black",
                            borderRadius: "30%",
                            backgroundColor: "gray",
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          {state.items7.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <Chair
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                  }}
                                >
                                  {item.content}
                                </Chair>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </Empty>
                      )}
                    </Droppable>
                  ) : (
                    <Chair>
                      <EmptyPerson>
                        <img
                          src="grinning-squinting-face.svg"
                          style={{ width: "50px" }}
                        />{" "}
                      </EmptyPerson>
                    </Chair>
                  )}
                </FirstSetset>
                <NormalTable></NormalTable>
                <FirstSetset style={{ marginTop: "5px" }}>
                  {seats[6] ? (
                    <Droppable droppableId="items8">
                      {(provided, snapshot) => (
                        <Empty
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            width: "50px",
                            height: "30px",
                            border: "2px solid black",
                            borderRadius: "30%",
                            backgroundColor: "gray",
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          {state.items8.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <Chair
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                  }}
                                >
                                  {item.content}
                                </Chair>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </Empty>
                      )}
                    </Droppable>
                  ) : (
                    <Chair>
                      <EmptyPerson>
                        <img
                          src="smirking-face.svg"
                          style={{ width: "50px" }}
                        />{" "}
                      </EmptyPerson>
                    </Chair>
                  )}

                  {seats[7] ? (
                    <Droppable droppableId="items9">
                      {(provided, snapshot) => (
                        <Empty
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            width: "50px",
                            height: "30px",
                            border: "2px solid black",
                            borderRadius: "30%",
                            backgroundColor: "gray",
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          {state.items9.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <Chair
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                  }}
                                >
                                  {item.content}
                                </Chair>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </Empty>
                      )}
                    </Droppable>
                  ) : (
                    <Chair>
                      <EmptyPerson>
                        <img
                          src="smiling-face-with-smiling-eyes.svg"
                          style={{ width: "50px" }}
                        />
                      </EmptyPerson>
                    </Chair>
                  )}
                </FirstSetset>
              </FirstSet>
            </First>
            {/* 2분단 */}
            <Second>
              <SecondSet>
                {seats[8] ? (
                  <Droppable droppableId="items10">
                    {(provided, snapshot) => (
                      <Empty
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          width: "50px",
                          height: "30px",
                          border: "2px solid black",
                          borderRadius: "30%",
                          backgroundColor: "gray",
                          marginBottom: "40px",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        {state.items10.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Chair
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                  backgroundImage: `url(${item.imageUrl})`,
                                }}
                              >
                                {item.content}
                              </Chair>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Empty>
                    )}
                  </Droppable>
                ) : (
                  <Chair>
                    <EmptyPerson>
                      <img src="flushed-face.svg" style={{ width: "50px" }} />{" "}
                    </EmptyPerson>
                  </Chair>
                )}
                <MiniTable></MiniTable>
              </SecondSet>

              <SecondSet>
                {seats[9] ? (
                  <Droppable droppableId="items11">
                    {(provided, snapshot) => (
                      <Empty
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          width: "50px",
                          height: "30px",
                          border: "2px solid black",
                          borderRadius: "30%",
                          backgroundColor: "gray",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        {state.items11.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Chair
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                  backgroundImage: `url(${item.imageUrl})`,
                                }}
                              >
                                {item.content}
                              </Chair>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Empty>
                    )}
                  </Droppable>
                ) : (
                  <Chair>
                    <EmptyPerson>
                      <img
                        src="cowboy-hat-face.svg"
                        style={{ width: "50px" }}
                      />{" "}
                    </EmptyPerson>
                  </Chair>
                )}
                <MiniTable>테이블3</MiniTable>
              </SecondSet>

              <SecondSet>
                {seats[10] ? (
                  <Droppable droppableId="items12">
                    {(provided, snapshot) => (
                      <Empty
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          width: "50px",
                          height: "30px",
                          border: "2px solid black",
                          borderRadius: "30%",
                          backgroundColor: "gray",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        {state.items12.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Chair
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                  backgroundImage: `url(${item.imageUrl})`,
                                }}
                              >
                                {item.content}
                              </Chair>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Empty>
                    )}
                  </Droppable>
                ) : (
                  <Chair>의자</Chair>
                )}
                <MiniTable>테이블3</MiniTable>
              </SecondSet>

              <SecondSet>
                {seats[11] ? (
                  <Droppable droppableId="items13">
                    {(provided, snapshot) => (
                      <Empty
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          width: "50px",
                          height: "30px",
                          border: "2px solid black",
                          borderRadius: "30%",
                          backgroundColor: "gray",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        {state.items13.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Chair
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                  backgroundImage: `url(${item.imageUrl})`,
                                }}
                              >
                                {item.content}
                              </Chair>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Empty>
                    )}
                  </Droppable>
                ) : (
                  <Chair>의자</Chair>
                )}
                <MiniTable>테이블3</MiniTable>
              </SecondSet>
            </Second>
          </LeftSide>
          <div>{showSuccess && <Success>성공!!!</Success>}</div>
          <RightSide>
            {/* 3분단 */}
            <Third>
              <ThirdSet>
                <ThirdSetSet>
                  <Chair></Chair>
                  <Chair></Chair>
                </ThirdSetSet>
                <DiaTable></DiaTable>
                <ThirdSetSet>
                  <Chair></Chair>
                  <Chair></Chair>
                </ThirdSetSet>
              </ThirdSet>

              <ThirdSet>
                <ThirdSetSet>
                  <Chair></Chair>
                  <Chair></Chair>
                </ThirdSetSet>
                <DiaTable></DiaTable>
                <ThirdSetSet>
                  <Chair></Chair>
                  <Chair></Chair>
                </ThirdSetSet>
              </ThirdSet>
            </Third>

            {/* 4분단 */}
            <Fourth>
              <FourthSet>
                {seats[12] ? (
                  <Droppable droppableId="items14">
                    {(provided, snapshot) => (
                      <Empty
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          width: "50px",
                          height: "30px",
                          border: "2px solid black",
                          borderRadius: "30%",
                          backgroundColor: "gray",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        {state.items14.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Chair
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                  backgroundImage: `url(${item.imageUrl})`,
                                }}
                                // style={{
                                //   userSelect: "none",
                                //   padding: 16,
                                //   margin: "0 0 8px 0",
                                //   minHeight: "50px",
                                //   backgroundColor: snapshot.isDragging
                                //     ? "#263B4A"
                                //     : "#456C86",
                                //   color: "white",
                                //   ...provided.draggableProps.style,
                                // }}
                              >
                                {item.content}
                              </Chair>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Empty>
                    )}
                  </Droppable>
                ) : (
                  <Chair>의자</Chair>
                )}
                {seats[13] ? (
                  <Droppable droppableId="items15">
                    {(provided, snapshot) => (
                      <Empty
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          width: "50px",
                          height: "30px",
                          border: "2px solid black",
                          borderRadius: "30%",
                          backgroundColor: "gray",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        {state.items15.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Chair
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  backgroundImage: `url(${item.imageUrl})`,
                                }}
                              >
                                {item.content}
                              </Chair>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Empty>
                    )}
                  </Droppable>
                ) : (
                  <Chair>의자</Chair>
                )}
                {seats[14] ? (
                  <Droppable droppableId="items16">
                    {(provided, snapshot) => (
                      <Empty
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          width: "50px",
                          height: "30px",
                          border: "2px solid black",
                          borderRadius: "30%",
                          backgroundColor: "gray",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        {state.items16.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <Chair
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                style={{
                                  backgroundImage: `url(${item.imageUrl})`,
                                }}
                              >
                                {item.content}
                              </Chair>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Empty>
                    )}
                  </Droppable>
                ) : (
                  <Chair>의자</Chair>
                )}
              </FourthSet>
              <LongTable>테이블 6</LongTable>
            </Fourth>
          </RightSide>
        </AllArea>
      </div>
    </DragDropContext>
  );
}

const TestDiv = styled(`div`)({
  position: "relative",
  fontSize: "5rem",
  animation: "slide 3s ease-in-out",
  "@keyframes slide": {
    from: {
      left: "-650px",
    },
    to: {
      left: "500px",
    },
  },
});

const WaitingLine = styled(`div`)({
  marginBottom: "150px",
  //   animation: "none",
  display: "flex",
  flexDirection: "row",
  // width: "100px",
  justifyContent: "space-around",
  //   paddingRight: "40%",
  // backgroundColor: "blue",
  position: "absolute",
  marginBottom: "100px",
});

const Waiting = styled(`div`)({
  marginTop: "0",
  marginBottom: "10px",
  position: "relative",
  userSelect: "none",
  width: "60px",
  height: "60px",
  marginRight: "15px",
  // pointerEvents: "none",
  animation: "motion 0.3s linear 0s infinite alternate",
  "@keyframes motion": {
    "0%": { marginTop: "0px" },
    "100%": { marginTop: "10px" },
  },
});

const AllArea = styled(`div`)({
  display: "flex",
  flexDirection: "row",
  //   position: "absolute",
  width: "1200px",
  height: "500px",
  //   marginLeft: "60px",
  marginTop: "100px",
  //   backgroundColor: "red",
});

const LeftSide = styled(`div`)({
  display: "flex",
  width: "600px",
  flexDirection: "column",
  //   backgroundColor: "orange",
});

const RightSide = styled(`div`)({
  display: "flex",
  width: "600px",
  //   flex: "0.4",
  flexDirection: "row",
  // backgroundColor: "green",
});

const First = styled(`div`)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  //   backgroundColor: "skyblue",
  flex: "2",
});
const Second = styled(`div`)({
  // backgroundColor: "purple",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flex: "1",
});
const Third = styled(`div`)({
  // backgroundColor: "pink",
  //   width: "50%",
  flex: "1.4",
});
const Fourth = styled(`div`)({
  // backgroundColor: "brown",
  display: "flex",
  flexDirection: "row",
  // MarginRight: "0px",
  //   width: "50%",
  flex: "1",
});

const FirstSet = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
});

const FirstSetset = styled(`div`)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",

  // alignContent: "center",
});

const SecondSet = styled(`div`)({
  // backgroundColor: "yellow",
  marginTop: "100px",
  display: "flex",
  flexDirection: "column",

  // justifyContent: "center",
  // alignContent: "center",
});

const ThirdSet = styled(`div`)({
  // backgroundColor: "black",
  // width: "80px",
  height: "40%",
  marginTop: "10%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
});

const ThirdSetSet = styled(`div`)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  // backgroundColor: "brown",
});

const FourthSet = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  marginLeft: "60px",
});

const Chair = styled(`div`)({
  width: "50px",
  height: "30px",
  border: "2px solid black",
  borderRadius: "30%",
  backgroundColor: "gray",
  // backgroundImage: `url(${"flushed-face.svg"})`,
});

const NormalTable = styled(`div`)({
  backgroundColor: "rgba(230, 230, 230, 1)",
  border: "2px solid black",
  borderRadius: "10%",
  // marginTop: "100px",
  width: "250px",
  height: "120px",
});

const MiniTable = styled(`div`)({
  backgroundColor: "rgba(230, 230, 230, 1)",
  border: "2px solid black",
  borderRadius: "10%",
  width: "100px",
  height: "80px",
  // marginTop: "100px",
  // bottom: "10",
  marginBottom: "20px",
});

const DiaTable = styled(`div`)({
  width: "90px",
  height: "90px",
  backgroundColor: "rgba(230, 230, 230, 1)",
  border: "2px solid black",
  borderRadius: "10%",
  // margin: "3px 0 0 30px",
  webKitTransform: "rotate(-45deg)",
  MozTransformOrigin: "rotate(-45deg)",
  msTransform: "rotate",
  OTransform: "rotate(-45deg)",
  transform: "rotate(-45deg)",
  WebkitTransformOrigin: "0 100%",
  MozTransformOrigin: "0 100%",
  msTransformOrigin: "0 100%",
  transformOrigin: "0 100%",
  marginLeft: "160px",
});

const LongTable = styled(`div`)({
  backgroundColor: "rgba(230, 230, 230, 1)",
  border: "2px solid black",
  borderRadius: "10%",
  width: "85px",
  height: "500px",
  // right: "0",
  // marginLeft: "auto",
  marginRight: "68px",
  //   marginTop: "100px",
  bottom: "0",
});

const Empty = styled(`div`)({
  width: "50px",
  height: "30px",
  // backgroundColor: "pink",
  borderRadius: "20%",
  animation: "light 1s ease-in-out infinite",
  "@keyframes light": {
    "0%": { boxShadow: "0 0 10px 0px rgba(255, 0, 0, 0.5)" },
    "50%": { boxShadow: "0 0 20px 5px rgba(255, 0, 0, 0.2)" },
    "100%": { boxShadow: "0 0 10px 0px rgba(255, 0, 0, 0.5)" },
  },
});

const EmptyPerson = styled(`div`)({
  width: "60px",
  height: "60px",
  animation: "motion 0.3s linear 0s infinite alternate",
  "@keyframes motion": {
    "0%": { marginTop: "0px" },
    "100%": { marginTop: "10px" },
  },
});

const Success = styled(`div`)({
  width: "300px",
  position: "absolute",
  fontSize: "100pt",
  color: "red",
});

import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import correctTypos from "../../assets/game_typo/correctTypos.png"
import { Translate } from "@mui/icons-material";

// 오타 위치 좌표
const typoSpots = [
  { x: 243.59443709995608, y: 345.51414077549026, found: false, letter:'의' },
  { x: 715.615742074012, y: 486.0469203488011, found: false, letter:'얻' },
  { x: 166.65497829514896, y: 557.3655022912792, found: false,letter:'되' },
  { x: 386.33598529655745, y: 698.3817893139062, found: false, letter:'제' },
  { x: 494.9347350726036, y: 839.3980763365333, found: false, letter:'개' },
];

// 맞힌 개수 표시
const styles = {
  position:'absolute',
  fontFamily:'neodgm',
  fontWeight:'bolder',
  fontSize:'40px',
}

export default function TypoGame() {

  // canvas 기본 설정
  const canvasRef = useRef(null);
  const [getCtx, setGetCtx] = useState(null);
  // 찾은 typoSpot 리스트
  const [foundSpots, setFoundSpots] = useState([]);
    
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    
    // 배경 이미지 넣기
    const bgImg = new Image();
    bgImg.src = correctTypos;
    bgImg.onload = function() {
      ctx.drawImage(bgImg, 0, 0,  1000, 1000);

      // 이미지 로드된 이후 오타 박스 넣기
      // (이미지가 canvas를 covers하기 때문에 cover image 넣은 뒤 rectangle 넣도록 순서 주의)
      typoSpots.forEach((spot) => {
        if (spot.found) {
          ctx.fillStyle = '#e4e5e5';
          ctx.fillRect(spot.x - 15, spot.y - 20, 30, 40);
          ctx.fillStyle = 'blue';
          ctx.font = '2vw ChosunSm';
          ctx.fillText(spot.letter, spot.x - 15, spot.y + 10);
        }
      });
    }
    setGetCtx(ctx);
  }, [foundSpots])

  // Mouse Event 사용하여 그림그리기
  const [painting, setPainting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const drawFn = e => {
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    setMousePos({ x, y });

    if (!painting) {
      getCtx.beginPath();
      getCtx.moveTo(mousePos.x, mousePos.y);
    } else {
      getCtx.lineTo(mousePos.x, mousePos.y);
      getCtx.stroke();
    }
  }

  // typo spot 찾고
  function handleSpotClick(spot) {
    spot.found = true;
    setFoundSpots([...foundSpots, spot]);
  }

  // Typo spot 클릭하면(=오타 찾으면) handleSpotClick 실행
  function handleCanvasClick() {
    console.log(mousePos.x, mousePos.y)
    typoSpots.forEach((spot) => {
      const dx = mousePos.x - spot.x;
      const dy = mousePos.y - spot.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 50 && !spot.found) {
        handleSpotClick(spot);
      }
    });
  }

  return (
    <Box className='typo' width='500px' height='500px'>
      <canvas
        width={1000}
        height={1000}
        style={{position:'absolute', width:'100%'}}
        ref={canvasRef}
        onMouseDown={()=> setPainting(true)}
        onMouseUp={()=> setPainting(false)}
        onMouseMove={e => drawFn(e)}
        onMouseLeave={()=> setPainting(false)}
        onClick={handleCanvasClick}>
        {/* <img className='statement' src={correctTypos} width='100%' height='100%'/> */}
      </canvas>
      <Box sx={{
        position:'absolute',
        width:'50px',
        height:'50px',
        top:'74%',
        left:'82%',
      }}>
        <Box sx={{...styles,color:'red'}}>{foundSpots.length}</Box>
        <Box sx={{...styles,right:'14px', top:'9px'}}>/</Box>
        <Box sx={{...styles,right:'0px', top:'23px'}}>{typoSpots.length}</Box>
      </Box>
    </Box>
  )
}

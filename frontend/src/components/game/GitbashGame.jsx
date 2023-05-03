import React, { useEffect, useState } from "react";
import {Typography, Paper, Box, IconButton, Stack, InputBase, Hidden} from '@mui/material';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import gitbash_logo from '../../assets/game_gitbash/gitbash_logo.png'
import gitbash_bg from '../../assets/game_gitbash/monitor.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot,} from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

export default function GitbashGame() {

  // 순서대로 제시할 명령어 리스트 
  const [order, setOrder] = useState(0);
  const [mileage, setMileage] = useState(0);

  const commandList = ['git clone https://lab.ssafy.com/Ssavival.git', 'cd Ssavival','git checkout -b feature/gitbash', 'git add .', 'git commit -m "FEAT : Idea Thinking"', 'git push origin feature/gitbash',]

  // folderName 변경
  let folderName = null;
  if (order >= 2) {
    folderName = '/Ssavival'
  }

  // branchName 변경
  let branchName = 'master';
  if (order >= 3) {
    branchName = 'feature/gitbash'
  }

  // 정답인 경우 마일리지 누적 + 아이콘 flip효과
  function onKeyPress(e) {
    if (e.key === 'Enter') {
      if (e.target.value === commandList[order]) {
        console.log('정답^_^')
        setMileage(mileage+1)
        setOrder(order+1)
      } else {
        console.log('오답ㅠ_ㅠ')
      }
      e.target.value=null
    }
  }

  useEffect(() => {
      const icon = document.querySelector('.mileage-icon');
      icon.classList.add('flip');
      setTimeout(() => {
        icon.classList.remove('flip');
      }, 5000);
  }, [mileage]);

  //흐르는 텍스트 구현
  const flowing = keyframes`
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-500%, 0, 0);
    }
  `
  const Flow = styled.div`
    animation: ${flowing} 30s linear infinite;
  `

  return (
    <Box sx={{
      display:'flex',
      transform: 'translate(0%, -25%)',
    }}>
      {/* gitbash 창 구현 */}
      <Paper sx={{
        backgroundColor:'#000000',
        borderRadius:'20px 20px 20px 20px',
        width:'100%',
        height:'auto'
        }}>

        {/* 창의 상단 구현 */}
        <Box sx={{
          display:'flex',
          justifyContent:'space-between',
          backgroundColor:'#DDDDDA',
          borderRadius:'20px 20px 0px 0px',
          }}>
          <Box
            style={{
              display:'flex',
              overflow: "hidden",
              alignItems:'center',
            }}>
            <img
              src={gitbash_logo}
              alt='gitbash_logo'
              width='30px'
              height='20px'
              style={{
                margin:'10px'
              }}
            />
            <Typography fontSize='1vw' align="left" sx={{overflow: 'hidden', textOverflow: 'ellipsis',}}> MINGW64:/c/Users/SSAFY/Desktop </Typography>
          </Box>
          <Box
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>
            <IconButton fontSize='1vw' aria-label="minimize">
              <MinimizeIcon />
            </IconButton>
            <IconButton fontSize='1vw' aria-label="maximize">
              <CropSquareIcon />
            </IconButton>
            <IconButton fontSize='vw' aria-label="close">
            <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* 창의 하단 구현 */}
        <Box sx={{
          display:'flex',
          position:'relative',
          justifyContent:'space-between',
          flexDirection:'column',
          paddingTop:'20px',
          paddingLeft:'5px',
        }}
        >
          <Box sx={{
            display:'flex',
            position:'absolute',
            flex: '0 0 auto',
            width:'100%',
            height:'30px',
            overflow:'hidden',
            whiteSpace:"nowrap",
            marginBottom:'20px',
          }}>
            <Flow style={{color:'white', fontSize:'1.4vw', textAlign:'center'}}>{commandList[order]} </Flow>
            <Flow style={{color:'black', fontSize:'1.7vw', textAlign:'center'}}>복사 방지 </Flow>
            <Flow style={{color:'white', fontSize:'1.4vw', textAlign:'center'}}>{commandList[order]} </Flow>
            <Flow style={{color:'black', fontSize:'1.7vw', textAlign:'center'}}>복사 방지 </Flow>
            <Flow style={{color:'white', fontSize:'1.4vw', textAlign:'center'}}>{commandList[order]} </Flow>
            <Flow style={{color:'black', fontSize:'1.7vw', textAlign:'center'}}>복사 방지 </Flow>
          </Box>

          <Stack direction='row' spacing={1} marginTop='40px' >
            <Typography whiteSpace={"nowrap"} fontSize='1.3vw' color='#00FF00'>SSAFY@DESKTOP-DOGVPUB</Typography>
            <Typography whiteSpace={"nowrap"} fontSize='1.3vw' color='#FF00FF'>MINGW64</Typography>
            <Typography whiteSpace={"nowrap"} sx={{overflow:'hidden', textOverflow:'ellipsis'}} fontSize='1.3vw' color='#FFFF00'>~/Desktop{folderName}</Typography>
            <Typography whiteSpace={"nowrap"} fontSize='1.3vw' color='#00FFFF'>({branchName})</Typography>
          </Stack>

          <Stack direction='row' spacing={1} alignItems='center'>
            <Typography color='white' fontSize='1.2vw' textAlign='left'>$</Typography>
            <InputBase
              sx={{ ml: 1, flex: 1, color:'white', fontSize:'1.2vw' }}
              autoFocus={true}
              placeholder='명령문을 이곳에 입력하세요'
              inputProps={{ 'aria-label': 'input commands'}}
              onKeyPress={onKeyPress}
            />
          </Stack>

          <Stack direction='row' spacing={1} alignItems='center' justifyContent='flex-end' padding='10px'>
            <FontAwesomeIcon className="mileage-icon" icon={faCircleDollarToSlot} style={{color: "#ffd91c", fontSize:'2vw'}} />
            <Typography color='white' fontSize='2vw' textAlign='center'>{mileage}/3</Typography>
          </Stack>
        </Box>
      </Paper>
    </Box>
  )    
}
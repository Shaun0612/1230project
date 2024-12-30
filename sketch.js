let started = false;

// 拉菲艾拉的精靈圖
let lafiraStaySprite;
let lafiraStay2Sprite;
let lafiraWalkSprite;
let lafiraStartSprite;
let lafiraOverSprite;
let lafiraAttackSprite;
let lafiraShotSprite;
let lafiraAttackSound;

// 澄閃的精靈圖
let chengStaySprite;
let chengStay2Sprite;
let chengWalkSprite;
let chengStartSprite;
let chengOverSprite;
let chengAttackSprite;
let chengShotSprite;
let chengDieSprite;
let chengAttackSound;

// 動畫狀態
let currentFrame = 0;
let isUsingStay2 = false;
let isPlayingStart = false;
let isPlayingOver = false;
let isPlayingAttack = false;
let isPlayingShot = false;
let shouldSwitchStay = false;
let shouldPlayAttackAfterStart = false;

// 澄閃的動畫狀態
let chengCurrentFrame = 0;
let chengIsUsingStay2 = false;
let chengIsPlayingStart = false;
let chengIsPlayingOver = false;
let chengIsPlayingAttack = false;
let chengIsPlayingShot = false;
let chengIsPlayingDie = false;
let chengIsDead = false;
let chengShouldSwitchStay = false;
let chengShouldPlayAttackAfterStart = false;

// 子彈動畫參數
let shotCurrentFrame = 0;
let shotLastFrameTime = 0;
let shotFrameRate = 20;
let shotFrameWidth = 452;
let shotFrameHeight = 488;
let shotTotalFrames = 24;
let shotX = 0;
let shotTargetX = 0;
let shotMoveSpeed = 10;

// 澄閃的子彈參數
let chengShotCurrentFrame = 0;
let chengShotLastFrameTime = 0;
let chengShotX = 0;
let chengShotTargetX = 0;

// 澄閃的死亡動畫參數
let chengDieCurrentFrame = 0;
let chengDieLastFrameTime = 0;

// 拉菲艾拉動畫參數
let stayFrameWidth = 452;
let stayFrameHeight = 488;
let stayTotalFrames = 59;

let stay2FrameWidth = 405;
let stay2FrameHeight = 476;
let stay2TotalFrames = 59;
let stay2WidthScale = 0.900;
let stay2HeightScale = 0.990;
let stay2OffsetX = 7;
let stay2OffsetY = -2;

let walkFrameWidth = 452;
let walkFrameHeight = 488;
let walkTotalFrames = 14;

let startFrameWidth = 452;
let startFrameHeight = 488;
let startTotalFrames = 15;

let overFrameWidth = 452;
let overFrameHeight = 488;
let overTotalFrames = 15;

let attackFrameWidth = 826;
let attackFrameHeight = 616;
let attackTotalFrames = 16;
let attackWidthScale = 1.827;
let attackHeightScale = 1.262;
let attackOffsetX = -23;
let attackOffsetY = 31;

// 顯示尺寸
let displayWidth;
let displayHeight;
let frameRate = 30;
let lastFrameTime = 0;
let isFacingLeft = false;
let isWalking = false;

// 角色位置
let characterX = 0;
let characterY = 0;
let moveSpeed = 5;

// 澄閃位置
let chengX = 0;
let chengY = 0;
let chengIsFacingLeft = true;
let chengIsWalking = false;

// 血量相關
let maxHealth = 100;
let currentHealth = 100;
let healthBarWidth = 200;
let healthBarHeight = 20;
let healthBarX = 20;
let healthBarY = 20;

// 澄閃血量
let chengMaxHealth = 100;
let chengCurrentHealth = 100;

// 在全局變數區域添加
let gameOver = false;
let battleEndButton;  // 改用不同的變數名稱避免衝突

// 在全局變數區域添加結束動畫的縮放參數
let overWidthScale = 1.007;  // 控制結束動畫的寬度縮放
let overHeightScale = 0.990; // 控制結束動畫的高度縮放

// 在全局變數區域添加
let canDamage = true;  // 控制傷害冷卻
let lastDamageTime = 0;  // 上次造成傷害的時間
let damageCooldown = 500;  // 傷害冷卻時間（毫秒）

// 在全局變數區域添加澄閃的時間控制變數
let chengLastFrameTime = 0;

// 在全局變數區域添加澄閃的動畫參數
// 澄閃的待機動畫參數
let chengStayFrameWidth = 542;
let chengStayFrameHeight = 632;
let chengStayTotalFrames = 80;

// 澄閃的待機2動畫參數
let chengStay2FrameWidth = 542;
let chengStay2FrameHeight = 632;
let chengStay2TotalFrames = 79;
let chengStay2WidthScale = 1.0;
let chengStay2HeightScale = 1.0;
let chengStay2OffsetX = 0;
let chengStay2OffsetY = 0;

// 澄閃的走路動畫參數
let chengWalkFrameWidth = 542;
let chengWalkFrameHeight = 632;
let chengWalkTotalFrames = 28;

// 澄閃的開始動畫參數
let chengStartFrameWidth = 542;
let chengStartFrameHeight = 632;
let chengStartTotalFrames = 15;

// 澄閃的結束動畫參數
let chengOverFrameWidth = 542;
let chengOverFrameHeight = 632;
let chengOverTotalFrames = 45;
let chengOverWidthScale = 1.0;
let chengOverHeightScale = 1.0;

// 澄閃的攻擊動畫參數
let chengAttackFrameWidth = 542;
let chengAttackFrameHeight = 632;
let chengAttackTotalFrames = 19;
let chengAttackWidthScale = 1.0;
let chengAttackHeightScale = 1.0;
let chengAttackOffsetX = 0;
let chengAttackOffsetY = 0;

// 澄閃的死亡動畫參數
let chengDieFrameWidth = 542;
let chengDieFrameHeight = 632;
let chengDieTotalFrames = 15;

// 在全局變數區域添加拉菲艾拉的整體縮放比例
let lafiraScale = 0.8; // 可以調整這個值來改變整體大小，1.0 是原始大小

// 在全局變數區域添加澄閃子彈的尺寸參數
let chengShotFrameWidth = 128;
let chengShotFrameHeight = 80;
let chengShotTotalFrames = 7;
let chengShotWidthScale = 1;    // 控制子彈寬度
let chengShotHeightScale = 1;   // 控制子彈高度
let chengShotMoveSpeed = 25;      // 增加子彈速度（原本是 15）
let chengShotDistance = 1000;      // 增加子彈飛行距離（原本是 1000）
let chengShotOffsetX = 200;        // 子彈起始位置偏移
let chengShotFrameRate = 20;       // 增加子彈動畫播放速度（原本是 20）

// 在全局變數區域添加位移相關參數
let chengIsDashing = false;
let chengDashSpeed = 100;      // 位移速度
let chengDashDistance = 200;  // 位移距離
let chengDashStartX = 0;      // 位移起始位置
let chengDashTargetX = 0;     // 位移目標位置
let chengDashCooldown = 3000; // 位移冷卻時間（毫秒）
let chengLastDashTime = 0;    // 上次位移的時間
let chengCanDash = true;      // 是否可以位移

// 在全局變數區域添加死亡動畫相關變數
let isPlayingDie = false;
let dieCurrentFrame = 0;
let dieFrameWidth = 452;
let dieFrameHeight = 488;
let dieTotalFrames = 10;
let dieLastFrameTime = 0;
let isDead = false;  // 添加這個變數
let dieSprite;

// 在全局變數區域添加縮放比例
let dieScaleRatio = 0.8;  // 死亡動畫的縮放比例

// 在全局變數區域添加澄閃的縮放比例
let chengDieScaleRatio = 1;  // 與拉菲艾拉相同的縮放比例

function preload() {
  // 載入拉菲艾拉的資源
  lafiraStaySprite = loadImage('拉菲艾拉/stay.png');
  lafiraStay2Sprite = loadImage('拉菲艾拉/stay2.png');
  lafiraWalkSprite = loadImage('拉菲艾拉/walk.png');
  lafiraStartSprite = loadImage('拉菲艾拉/start.png');
  lafiraOverSprite = loadImage('拉菲艾拉/over.png');
  lafiraAttackSprite = loadImage('拉菲艾拉/attack.png');
  lafiraShotSprite = loadImage('拉菲艾拉/shot.png');
  lafiraAttackSound = loadSound('拉菲艾拉/attack.wav');
  
  // 載入澄閃的資源
  chengStaySprite = loadImage('澄閃/stay.png');
  chengStay2Sprite = loadImage('澄閃/stay2.png');
  chengWalkSprite = loadImage('澄閃/walk.png');
  chengStartSprite = loadImage('澄閃/start.png');
  chengOverSprite = loadImage('澄閃/over.png');
  chengAttackSprite = loadImage('澄閃/attack.png');
  chengShotSprite = loadImage('澄閃/shot.png');
  chengDieSprite = loadImage('澄閃/die.png');
  chengAttackSound = loadSound('澄閃/attack.wav');
  
  // 載入死亡動畫圖片
  dieSprite = loadImage('拉菲艾拉/die.png');  // 請確保路徑正確
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // 計算等比縮小後的尺寸
  let scale = (stayFrameHeight - 50) / stayFrameHeight;
  displayWidth = stayFrameWidth * scale;
  displayHeight = stayFrameHeight * scale;
  
  // 初始化時間相關變數
  lastFrameTime = millis();
  shotLastFrameTime = millis();
  chengShotLastFrameTime = millis();
  chengDieLastFrameTime = millis();
  
  // 修改澄閃的初始位置
  chengX = width * 0.93;  // 調整水平位置（0.8 表示在視窗寬度的 80% 處）
  chengY = height * 0 -20 ; // 調整垂直位置（0.3 表示在視窗高度的 30% 處）
  
  let startButton = createButton('點擊開始');
  startButton.position(width/2 - 50, height/2);
  startButton.mousePressed(startAnimation);
  isDead = false;  // 確保初始狀態為未死亡
  
  // 如果按鈕已經存在，先移除它
  if (battleEndButton) {
    battleEndButton.remove();
  }
  
  // 創建新按鈕
  battleEndButton = createButton('再次遊玩');
  battleEndButton.position(width/2 - 50, height/2 + 50);
  battleEndButton.size(100, 40);
  battleEndButton.style('font-size', '16px');
  battleEndButton.mousePressed(resetGame);
  battleEndButton.hide();
}

function startAnimation() {
  started = true;
  this.remove();
  userStartAudio();
}

function draw() {
  background(0);
  drawDashInvalidArea();
  
  // 添加背景文字
  push();
  textSize(200);  // 設置大字體
  textAlign(CENTER, CENTER);
  textStyle(BOLD);  // 設置粗體
  fill(0, 100, 255, 30);  // 淡藍色，透明度 30
  text("TKUET", width/2, height/2);  // 置中顯示
  pop();
  
  // 檢查遊戲結束條件並凍結所有動作
  if ((currentHealth <= 0 || chengCurrentHealth <= 0) && !gameOver) {
    gameOver = true;
    battleEndButton.show();
    
    // 停止所有角色的動作
    // 拉菲艾拉
    isPlayingStart = false;
    isPlayingOver = false;
    isPlayingAttack = false;
    isPlayingShot = false;
    isWalking = false;
    isUsingStay2 = false;
    
    // 澄閃
    chengIsPlayingStart = false;
    chengIsPlayingAttack = false;
    chengIsPlayingShot = false;
    chengIsWalking = false;
    chengIsUsingStay2 = false;
    chengIsDashing = false;
  }

  // 如果遊戲結束，只允許播放死亡動畫，禁止其他所有動作
  if (gameOver) {
    // 只處理死亡動畫
    if (currentHealth <= 0 && isPlayingDie) {
      // 拉菲艾拉的死亡動畫
      push();
      translate(characterX + 50, characterY + windowHeight/2);
      scale(isFacingLeft ? -1 : 1, 1);
      
      let sx = dieCurrentFrame * dieFrameWidth;
      image(dieSprite, 0, 0, 
            (displayWidth/2) * dieScaleRatio, 
            (displayHeight/2) * dieScaleRatio,
            sx, 0, dieFrameWidth, dieFrameHeight);
      
      // 更新死亡動畫幀
      let currentTime = millis();
      if (currentTime - dieLastFrameTime > 1000 / frameRate) {
        dieCurrentFrame++;
        if (dieCurrentFrame >= dieTotalFrames) {
          dieCurrentFrame = dieTotalFrames - 1;
        }
        dieLastFrameTime = currentTime;
      }
      pop();
    }
    
    if (chengCurrentHealth <= 0 && chengIsPlayingDie) {
      // 澄閃的死亡動畫
      push();
      translate(chengX + 50, chengY + windowHeight/2);
      scale(chengIsFacingLeft ? -1 : 1, 1);
      
      let sx = chengDieCurrentFrame * chengDieFrameWidth;
      image(chengDieSprite, 0, 0, 
            (displayWidth/2) * chengDieScaleRatio, 
            (displayHeight/2) * chengDieScaleRatio,
            sx, 0, chengDieFrameWidth, chengDieFrameHeight);
      
      // 更新死亡動畫幀
      let currentTime = millis();
      if (currentTime - chengDieLastFrameTime > 1000 / frameRate) {
        chengDieCurrentFrame++;
        if (chengDieCurrentFrame >= chengDieTotalFrames) {
          chengDieCurrentFrame = chengDieTotalFrames - 1;
        }
        chengDieLastFrameTime = currentTime;
      }
      pop();
    }
    
    // 繪製遊戲結束UI
    push();
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    if (currentHealth <= 0) {
      text("戰鬥結束！", width/2, height/2 - 50);
    } else if (chengCurrentHealth <= 0) {
      text("戰鬥結束！", width/2, height/2 - 50);
    }
    pop();
    
    return;  // 遊戲結束時不執行後續的遊戲邏輯
  }

  // 檢查血量和觸發死亡動畫
  if (currentHealth <= 0 && !isPlayingDie) {
    isPlayingDie = true;
    isDead = true;
    dieCurrentFrame = 0;
    dieLastFrameTime = millis();
    
    // 停止所有其他動畫狀態
    isPlayingStart = false;
    isPlayingOver = false;
    isPlayingAttack = false;
    isPlayingShot = false;
    isWalking = false;
    isUsingStay2 = false;
  }

  // 如果正在播放死亡動畫，優先處理死亡動畫
  if (isPlayingDie) {
    push();
    translate(characterX + 50, characterY + windowHeight/2);
    scale(isFacingLeft ? -1 : 1, 1);
    
    let sx = dieCurrentFrame * dieFrameWidth;
    // 應用縮放比例到寬度和高度
    image(dieSprite, 0, 0, 
          (displayWidth/2) * dieScaleRatio,    // 寬度乘以 0.8
          (displayHeight/2) * dieScaleRatio,   // 高度乘以 0.8
          sx, 0, dieFrameWidth, dieFrameHeight);
    
    // 更新死亡動畫幀
    let currentTime = millis();
    if (currentTime - dieLastFrameTime > 1000 / frameRate) {
      dieCurrentFrame++;
      if (dieCurrentFrame >= dieTotalFrames) {
        dieCurrentFrame = dieTotalFrames - 1;
      }
      dieLastFrameTime = currentTime;
    }
    pop();
  } else {
    // 如果沒有播放死亡動畫，才執行其他動畫
    if (isPlayingStart) {
      // ... 其他動畫邏輯 ...
    } else if (isPlayingOver) {
      // ... 其他動畫邏輯 ...
    } else if (isPlayingAttack) {
      // ... 其他動畫邏輯 ...
    } else {
      // ... 待機動畫邏輯 ...
    }
  }

  // 如果在死亡狀態，禁用所有控制
  if (isPlayingDie) {
    return;  // 直接返回，不處理任何輸入
  }

  // 在所有動作更新之前，先檢查血量
  if (currentHealth <= 0 && !isDead) {
    console.log("觸發死亡動畫");  // 用於調試
    isDead = true;
    isPlayingDie = true;
    dieCurrentFrame = 0;
    dieLastFrameTime = millis();
    
    // 停止所有其他動畫狀態
    isPlayingStart = false;
    isPlayingOver = false;
    isPlayingAttack = false;
    isPlayingShot = false;
    isWalking = false;
    isUsingStay2 = false;
  }

  if (started) {
    // 拉菲艾拉的移動控制
    if (!isPlayingStart && !isPlayingOver && !isPlayingAttack) {
      handleMovement();
    }
    
    // 澄閃的移動控制
    if (!chengIsDead && !chengIsPlayingStart && !chengIsPlayingOver && !chengIsPlayingAttack) {
      handleChengMovement();
    }
    
    imageMode(CENTER);
    push();
    
    // 更新拉菲艾拉的動畫
    let currentTime = millis();
    if (currentTime - lastFrameTime > 1000 / frameRate) {
      if (isPlayingStart) {
        currentFrame++;
        if (currentFrame >= startTotalFrames) {
          isPlayingStart = false;
          if (shouldSwitchStay) {
            isUsingStay2 = !isUsingStay2;
            shouldSwitchStay = false;
            
            if (shouldPlayAttackAfterStart) {
              isPlayingAttack = true;
              shouldPlayAttackAfterStart = false;
              currentFrame = 0;
            }
          }
          currentFrame = 0;
        }
      } else if (isPlayingOver) {
        currentFrame++;
        if (currentFrame >= overTotalFrames) {
          isPlayingOver = false;
          if (shouldSwitchStay) {
            isUsingStay2 = !isUsingStay2;
            shouldSwitchStay = false;
          }
          currentFrame = 0;
        }
      } else if (isPlayingAttack) {
        currentFrame++;
        if (currentFrame >= attackTotalFrames) {
          isPlayingAttack = false;
          currentFrame = 0;
        }
        
        if (currentFrame === 1) {
          isPlayingShot = true;
          shotCurrentFrame = 0;
          if (isFacingLeft) {
            shotX = characterX + 50 - 200;
            shotTargetX = shotX - 100;
          } else {
            shotX = characterX + 50 + 150;
            shotTargetX = shotX + 100;
          }
          lafiraAttackSound.play();
        }
      } else {
        let totalFrames = isWalking ? walkTotalFrames : 
                         (isUsingStay2 ? stay2TotalFrames : stayTotalFrames);
        currentFrame = (currentFrame + 1) % totalFrames;
      }
      lastFrameTime = currentTime;
    }
    
    // 繪製拉菲艾拉
    push();
    if (isPlayingAttack) {
      let adjustedAttackOffsetX = isFacingLeft ? 18 : -17;
      translate(characterX + 50 + adjustedAttackOffsetX, 
               characterY + windowHeight/2 + attackOffsetY);
    } else if (!isWalking && isUsingStay2) {
      let adjustedStay2OffsetX = isFacingLeft ? -6 : 7;
      translate(characterX + 50 + adjustedStay2OffsetX, 
               characterY + windowHeight/2 + stay2OffsetY);
    } else {
      translate(characterX + 50, characterY + windowHeight/2);
    }
    scale(isFacingLeft ? -1 : 1, 1);
    
    let currentSprite;
    let currentWidth;
    let currentHeight;
    let sx = currentFrame;
    
    if (isPlayingStart) {
      currentSprite = lafiraStartSprite;
      currentWidth = startFrameWidth;
      currentHeight = startFrameHeight;
      sx *= startFrameWidth;
      image(currentSprite, 0, 0, 
            (displayWidth/2) * lafiraScale, 
            (displayHeight/2) * lafiraScale,
            sx, 0, currentWidth, currentHeight);
    } else if (isPlayingOver) {
      currentSprite = lafiraOverSprite;
      currentWidth = overFrameWidth;
      currentHeight = overFrameHeight;
      sx *= overFrameWidth;
      image(currentSprite, 0, 0, 
            (displayWidth/2) * overWidthScale * lafiraScale, 
            (displayHeight/2) * overHeightScale * lafiraScale,
            sx, 0, currentWidth, currentHeight);
    } else if (isPlayingAttack) {
      currentSprite = lafiraAttackSprite;
      currentWidth = attackFrameWidth;
      currentHeight = attackFrameHeight;
      sx *= attackFrameWidth;
      image(currentSprite, 0, 0, 
            (displayWidth/2) * attackWidthScale * lafiraScale, 
            (displayHeight/2) * attackHeightScale * lafiraScale,
            sx, 0, currentWidth, currentHeight);
    } else if (isWalking) {
      currentSprite = lafiraWalkSprite;
      currentWidth = walkFrameWidth;
      currentHeight = walkFrameHeight;
      sx *= walkFrameWidth;
      image(currentSprite, 0, 0, 
            (displayWidth/2) * lafiraScale, 
            (displayHeight/2) * lafiraScale,
            sx, 0, currentWidth, currentHeight);
    } else {
      currentSprite = isUsingStay2 ? lafiraStay2Sprite : lafiraStaySprite;
      currentWidth = isUsingStay2 ? stay2FrameWidth : stayFrameWidth;
      currentHeight = isUsingStay2 ? stay2FrameHeight : stayFrameHeight;
      sx *= isUsingStay2 ? stay2FrameWidth : stayFrameWidth;
      if (isUsingStay2) {
        image(currentSprite, 0, 0, 
              (displayWidth/2) * stay2WidthScale * lafiraScale, 
              (displayHeight/2) * stay2HeightScale * lafiraScale,
              sx, 0, currentWidth, currentHeight);
      } else {
        image(currentSprite, 0, 0, 
              (displayWidth/2) * lafiraScale, 
              (displayHeight/2) * lafiraScale,
              sx, 0, currentWidth, currentHeight);
      }
    }
    pop();
    
    // 繪製拉菲艾拉的子彈
    if (isPlayingShot) {
      push();
      let currentTime = millis();
      
      if (currentTime - shotLastFrameTime > 1000 / shotFrameRate) {
        shotCurrentFrame++;
        if (shotCurrentFrame >= shotTotalFrames) {
          shotCurrentFrame = shotTotalFrames - 1;
        }
        shotLastFrameTime = currentTime;
      }
      
      if (shotX !== shotTargetX) {
        shotX += isFacingLeft ? -shotMoveSpeed : shotMoveSpeed;
        if ((isFacingLeft && shotX <= shotTargetX) || 
            (!isFacingLeft && shotX >= shotTargetX)) {
          isPlayingShot = false;
        }
      }
      
      translate(shotX, characterY + windowHeight/2);
      scale(isFacingLeft ? -1 : 1, 1);
      let sx = shotCurrentFrame * shotFrameWidth;
      image(lafiraShotSprite, 0, 0, displayWidth/2, displayHeight/2,
            sx, 0, shotFrameWidth, shotFrameHeight);
      pop();
    }
    
    // 澄閃的動畫邏輯
    if (!chengIsDead) {
      // 檢查澄閃的血量和觸發死亡動畫
      if (chengCurrentHealth <= 0 && !chengIsPlayingDie) {
        chengIsPlayingDie = true;
        chengIsDead = true;
        chengDieCurrentFrame = 0;
        chengDieLastFrameTime = millis();
        
        // 停止所有其他動畫狀態
        chengIsPlayingStart = false;
        chengIsPlayingOver = false;
        chengIsPlayingAttack = false;
        chengIsPlayingShot = false;
        chengIsWalking = false;
        chengIsUsingStay2 = false;
      }

      // 如果正在播放澄閃的死亡動畫，優先處理死亡動畫
      if (chengIsPlayingDie) {
        push();
        translate(chengX + 50, chengY + windowHeight/2);
        scale(chengIsFacingLeft ? -1 : 1, 1);
        
        let sx = chengDieCurrentFrame * chengDieFrameWidth;
        image(chengDieSprite, 0, 0, 
              (displayWidth/2) * chengDieScaleRatio, 
              (displayHeight/2) * chengDieScaleRatio,
              sx, 0, chengDieFrameWidth, chengDieFrameHeight);
        
        // 更新死亡動畫幀
        let currentTime = millis();
        if (currentTime - chengDieLastFrameTime > 1000 / frameRate) {
          chengDieCurrentFrame++;
          if (chengDieCurrentFrame >= chengDieTotalFrames) {
            chengDieCurrentFrame = chengDieTotalFrames - 1;
          }
          chengDieLastFrameTime = currentTime;
        }
        pop();
        
        // 如果在死亡狀態，禁用所有控制
        if (chengIsPlayingDie) {
          return;  // 直接返回，不處理任何輸入
        }
      } else {
        // 如果沒有播放死亡動畫，才執行其他動畫
        if (chengIsPlayingStart) {
          // ... 澄閃的其他動畫邏輯 ...
        } else if (chengIsPlayingAttack) {
          // ... 澄閃的其他動畫邏輯 ...
        } else if (chengIsPlayingShot) {
          // ... 澄閃的其他動畫邏輯 ...
        } else if (chengIsWalking) {
          // ... 澄閃的其他動畫邏輯 ...
        } else {
          // ... 澄閃的待機動畫邏輯 ...
        }
      }
      
      // 更新澄閃的動畫
      let currentTime = millis();
      if (currentTime - chengLastFrameTime > 1000 / frameRate) {
        if (chengIsPlayingStart) {
          chengCurrentFrame++;
          if (chengCurrentFrame >= startTotalFrames) {
            chengIsPlayingStart = false;
            if (chengShouldSwitchStay) {
              chengIsUsingStay2 = !chengIsUsingStay2;
              chengShouldSwitchStay = false;
              
              if (chengShouldPlayAttackAfterStart) {
                chengIsPlayingAttack = true;
                chengShouldPlayAttackAfterStart = false;
                chengCurrentFrame = 0;
              }
            }
            chengCurrentFrame = 0;
          }
        } else if (chengIsPlayingOver) {
          chengCurrentFrame++;
          if (chengCurrentFrame >= overTotalFrames) {
            chengIsPlayingOver = false;
            if (chengShouldSwitchStay) {
              chengIsUsingStay2 = !chengIsUsingStay2;
              chengShouldSwitchStay = false;
            }
            chengCurrentFrame = 0;
          }
        } else if (chengIsPlayingAttack) {
          chengCurrentFrame++;
          if (chengCurrentFrame >= attackTotalFrames) {
            chengIsPlayingAttack = false;
            chengCurrentFrame = 0;
          }
          
          if (chengCurrentFrame === 1) {
            chengIsPlayingShot = true;
            chengShotCurrentFrame = 0;
            if (chengIsFacingLeft) {
              chengShotX = chengX - chengShotOffsetX + 200;  // 左側子彈起始位置
              chengShotTargetX = chengShotX - chengShotDistance;  // 左側子彈目標位置
            } else {
              chengShotX = chengX + chengShotOffsetX - 200;  // 右側子彈起始位置
              chengShotTargetX = chengShotX + chengShotDistance;  // 右側子彈目標位置
            }
            chengAttackSound.play();
          }
        } else {
          let totalFrames = chengIsWalking ? walkTotalFrames : 
                           (chengIsUsingStay2 ? stay2TotalFrames : stayTotalFrames);
          chengCurrentFrame = (chengCurrentFrame + 1) % totalFrames;
        }
        chengLastFrameTime = currentTime;
      }
      
      // 繪製澄閃
      push();
      if (chengIsPlayingAttack) {
        let adjustedChengAttackOffsetX = chengIsFacingLeft ? 0 : 0;
        translate(chengX + 50 + adjustedChengAttackOffsetX, chengY + windowHeight/2 + chengAttackOffsetY);
      } else if (!chengIsWalking && chengIsUsingStay2) {
        let adjustedChengStay2OffsetX = chengIsFacingLeft ? 0 : 0;
        translate(chengX + 50 + adjustedChengStay2OffsetX, chengY + windowHeight/2 + chengStay2OffsetY);
      } else {
        translate(chengX + 50, chengY + windowHeight/2);
      }
      scale(chengIsFacingLeft ? -1 : 1, 1);
      
      let currentSprite;
      let currentWidth;
      let currentHeight;
      let sx = chengCurrentFrame;
      
      if (chengIsPlayingStart) {
        currentSprite = chengStartSprite;
        currentWidth = chengStartFrameWidth;
        currentHeight = chengStartFrameHeight;
        sx *= chengStartFrameWidth;
        image(currentSprite, 0, 0, displayWidth/2, displayHeight/2,
              sx, 0, currentWidth, currentHeight);
      } else if (chengIsPlayingOver) {
        currentSprite = chengOverSprite;
        currentWidth = chengOverFrameWidth;
        currentHeight = chengOverFrameHeight;
        sx *= chengOverFrameWidth;
        image(currentSprite, 0, 0, 
              (displayWidth/2) * chengOverWidthScale, 
              (displayHeight/2) * chengOverHeightScale,
              sx, 0, currentWidth, currentHeight);
      } else if (chengIsPlayingAttack) {
        currentSprite = chengAttackSprite;
        currentWidth = chengAttackFrameWidth;
        currentHeight = chengAttackFrameHeight;
        sx *= chengAttackFrameWidth;
        image(currentSprite, 0, 0, 
              (displayWidth/2) * chengAttackWidthScale, 
              (displayHeight/2) * chengAttackHeightScale,
              sx, 0, currentWidth, currentHeight);
      } else if (chengIsWalking) {
        currentSprite = chengWalkSprite;
        currentWidth = chengWalkFrameWidth;
        currentHeight = chengWalkFrameHeight;
        sx *= chengWalkFrameWidth;
        image(currentSprite, 0, 0, displayWidth/2, displayHeight/2,
              sx, 0, currentWidth, currentHeight);
      } else {
        currentSprite = chengIsUsingStay2 ? chengStay2Sprite : chengStaySprite;
        currentWidth = chengIsUsingStay2 ? chengStay2FrameWidth : chengStayFrameWidth;
        currentHeight = chengIsUsingStay2 ? chengStay2FrameHeight : chengStayFrameHeight;
        sx *= chengIsUsingStay2 ? chengStay2FrameWidth : chengStayFrameWidth;
        if (chengIsUsingStay2) {
          image(currentSprite, 0, 0, 
                (displayWidth/2) * chengStay2WidthScale, 
                (displayHeight/2) * chengStay2HeightScale,
                sx, 0, currentWidth, currentHeight);
        } else {
          image(currentSprite, 0, 0, displayWidth/2, displayHeight/2,
                sx, 0, currentWidth, currentHeight);
        }
      }
      pop();
      
      // 繪製澄閃的子彈
      if (chengIsPlayingShot) {
        push();
        let currentTime = millis();
        
        if (currentTime - chengShotLastFrameTime > 1000 / chengShotFrameRate) {
          chengShotCurrentFrame++;
          if (chengShotCurrentFrame >= chengShotTotalFrames) {
            chengShotCurrentFrame = chengShotTotalFrames - 1;
          }
          chengShotLastFrameTime = currentTime;
        }
        
        if (chengShotX !== chengShotTargetX) {
          chengShotX += chengIsFacingLeft ? -chengShotMoveSpeed : chengShotMoveSpeed;
          
          // 檢測子彈是否碰到拉菲艾拉
          let shotHitbox = {
            x: chengShotX - 25,
            y: chengY + windowHeight/2 - 25,  // 使用 chengY 來保持與澄閃同高
            width: 50,
            height: 50
          };
          
          let lafiraHitbox = {
            x: characterX,
            y: characterY + windowHeight/2 - 50,
            width: 100,
            height: 100
          };
          
          // 檢查碰撞並處理傷害
          if (checkCollision(shotHitbox, lafiraHitbox)) {
            currentHealth = max(0, currentHealth - 20);  // 扣除拉菲艾拉的血量
            chengIsPlayingShot = false;  // 子彈消失
          }
          
          // 檢查是否到達目標位置或超出視窗
          if ((chengIsFacingLeft && chengShotX <= chengShotTargetX) || 
              (!chengIsFacingLeft && chengShotX >= chengShotTargetX) ||
              chengShotX < -200 || chengShotX > width + 200) {
            chengIsPlayingShot = false;
          }
        }
        
        // 使用 chengY 來繪製子彈，保持與澄閃同高
        translate(chengShotX, chengY + windowHeight/2);
        scale(chengIsFacingLeft ? -1 : 1, 1);
        let sx = chengShotCurrentFrame * chengShotFrameWidth;
        
        image(chengShotSprite, 0, 0, 
              (displayWidth/2) * chengShotWidthScale, 
              (displayHeight/2) * chengShotHeightScale,
              sx, 0, chengShotFrameWidth, chengShotFrameHeight);
        pop();
      }
    }
    
    // 如果澄閃已經死亡，顯示結束文字
    
    
    pop();
    
    // 繪製血條
    // 拉菲艾拉的血條
    fill(100);
    noStroke();
    rect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);
    
    fill(255, 0, 0);
    let currentHealthWidth = map(currentHealth, 0, maxHealth, 0, healthBarWidth);
    rect(healthBarX, healthBarY, currentHealthWidth, healthBarHeight);
    
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);
    
    noStroke();
    fill(255);
    textAlign(LEFT, CENTER);
    text(currentHealth + '/' + maxHealth, 
         healthBarX + healthBarWidth + 10, healthBarY + healthBarHeight/2);
    
    // 澄閃的血條
    let chengHealthBarX = width - healthBarWidth - 20;
    fill(100);
    noStroke();
    rect(chengHealthBarX, healthBarY, healthBarWidth, healthBarHeight);
    
    fill(255, 0, 0);
    let chengCurrentHealthWidth = map(chengCurrentHealth, 0, chengMaxHealth, 0, healthBarWidth);
    rect(chengHealthBarX, healthBarY, chengCurrentHealthWidth, healthBarHeight);
    
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(chengHealthBarX, healthBarY, healthBarWidth, healthBarHeight);
    
    noStroke();
    fill(255);
    textAlign(RIGHT, CENTER);
    text(chengCurrentHealth + '/' + chengMaxHealth, 
         chengHealthBarX - 10, healthBarY + healthBarHeight/2);
    
    // 拉菲艾拉的操作說明
    textSize(16);
    textAlign(LEFT, BOTTOM);
    fill(255);
    let lafiraInstructions = [
      "拉菲艾拉操作（只能近戰攻擊，但攻擊如果命中敵人可以回復血量）：",
      "移動：WASD 攻擊：F 切換（攻擊/非攻擊）：R",
    ];
    
    // 澄閃的操作說明
    let chengInstructions = [
      "澄閃操作：（無法回復血量，但可以遠程攻擊）",
      "移動：方向鍵 攻擊：J 切換（攻擊/非攻擊）：K 位移（無法在藍色區域使用）：L",
    ];
    
    let startY = height - 25; // 起始Y座標
    let lineHeight = 20; // 行高
    let leftMargin = 20; // 左邊距
    let rightMargin = width - 20; // 右邊距
    
    // 繪製拉菲艾拉的操作說明（左側）
    for (let i = 0; i < lafiraInstructions.length; i++) {
      text(lafiraInstructions[i], leftMargin, startY + i * lineHeight);
    }
    
    // 繪製澄閃的操作說明（右側）
    textAlign(RIGHT, BOTTOM);
    for (let i = 0; i < chengInstructions.length; i++) {
      text(chengInstructions[i], rightMargin, startY + i * lineHeight);
    }
    
    // 檢查攻擊碰撞
    if (isPlayingAttack && canDamage) {
      // 計算拉菲艾拉的攻擊範圍
      let attackX = characterX + (isFacingLeft ? -150 : 150);
      let attackWidth = 100;
      let attackRange = {
        x: attackX,
        y: characterY + windowHeight/2 - 50,
        width: attackWidth,
        height: 100
      };
      
      // 計算澄閃的碰撞箱
      let chengHitbox = {
        x: chengX,
        y: chengY + windowHeight/2 - 50,
        width: 100,
        height: 100
      };
      
      // 檢查攻擊是否命中
      if (checkCollision(attackRange, chengHitbox)) {
        if (millis() - lastDamageTime > damageCooldown) {
          chengCurrentHealth = max(0, chengCurrentHealth - 10);
          currentHealth = min(maxHealth, currentHealth + 5);
          lastDamageTime = millis();
          canDamage = false;
          setTimeout(() => { canDamage = true; }, 100);
        }
      }
    }

    // 檢查子彈碰撞
    if (isPlayingShot) {
      let shotHitbox = {
        x: shotX - 25,
        y: characterY + windowHeight/2 - 25,
        width: 50,
        height: 50
      };
      
      let chengHitbox = {
        x: chengX,
        y: chengY + windowHeight/2 - 50,
        width: 100,
        height: 100
      };
      
      if (checkCollision(shotHitbox, chengHitbox)) {
        if (millis() - lastDamageTime > damageCooldown) {
          chengCurrentHealth = max(0, chengCurrentHealth - 10);
          currentHealth = min(maxHealth, currentHealth + 5);
          lastDamageTime = millis();
          isPlayingShot = false;
        }
      }
    }

    // 處理位移動作
    if (chengIsDashing) {
      if (chengIsFacingLeft) {
        chengX -= chengDashSpeed;
        if (chengX <= chengDashTargetX) {
          chengX = chengDashTargetX;
          chengIsDashing = false;
          setTimeout(() => {
            chengCanDash = true;
          }, chengDashCooldown);
        }
      } else {
        chengX += chengDashSpeed;
        if (chengX >= chengDashTargetX) {
          chengX = chengDashTargetX;
          chengIsDashing = false;
          setTimeout(() => {
            chengCanDash = true;
          }, chengDashCooldown);
        }
      }
      
      // 確保不會超出視窗範圍
      chengX = constrain(chengX, 50, width - 150);
    }

    // 繪製位移冷卻圖示和時間
    drawDashCooldown();

    // 在血量檢查部分添加觸發死亡動畫的邏輯
    if (currentHealth <= 0 && !isPlayingDie) {
      isPlayingDie = true;
      dieCurrentFrame = 0;
      dieLastFrameTime = millis();
      
      // 停止其他動畫狀態
      isPlayingStart = false;
      isPlayingOver = false;
      isPlayingAttack = false;
      isPlayingShot = false;
      isWalking = false;
    }

    // 如果正在播放死亡動畫，禁用其他動作
    if (isPlayingDie) {
      // 禁用移動
      if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) {
        return;
      }
      // 禁用攻擊和其他動作
      if (keyIsDown(70) || keyIsDown(82)) {
        return;
      }
    }

    // 檢查是否有角色死亡
    if ((currentHealth <= 0 || chengCurrentHealth <= 0) && !gameOver) {
      gameOver = true;
      battleEndButton.show();
    }
  }
  
  // 繪製上下兩條黃線
  stroke(255, 255, 0);
  strokeWeight(5);
  line(0, height*0+50, width, height*0+50);
  line(0, height - 50, width, height - 50);
}

function handleMovement() {
  isWalking = false;
  
  if (keyIsDown(87)) { // W
    characterY = max(0-height/2 + 140, characterY - moveSpeed);
    isWalking = true;
  }
  if (keyIsDown(83)) { // S
    characterY = min(windowHeight/2-130, characterY + moveSpeed);
    isWalking = true;
  }
  if (keyIsDown(65)) { // A
    characterX = max(0-20, characterX - moveSpeed);
    isFacingLeft = true;
    isWalking = true;
  }
  if (keyIsDown(68)) { // D
    characterX = min(windowWidth  - 80, characterX + moveSpeed);
    isFacingLeft = false;
    isWalking = true;
  }
}

function handleChengMovement() {
  chengIsWalking = false;
  
  if (keyIsDown(UP_ARROW)) {
    chengY = max(0-height/2 + 90, chengY - moveSpeed);
    chengIsWalking = true;
  }
  if (keyIsDown(DOWN_ARROW)) {
    chengY = min(windowHeight/2-160, chengY + moveSpeed);
    chengIsWalking = true;
  }
  if (keyIsDown(LEFT_ARROW)) {
    chengX = max(0, chengX - moveSpeed);
    chengIsFacingLeft = true;
    chengIsWalking = true;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    chengX = min(width - displayWidth/2 + 100, chengX + moveSpeed);
    chengIsFacingLeft = false;
    chengIsWalking = true;
  }
}

function keyPressed() {
  if (keyCode === 70) { // F鍵優先處理
    if (!isPlayingAttack) {
      if (isUsingStay2) {
        isPlayingAttack = true;
        isPlayingStart = false;
        isPlayingOver = false;
        shouldPlayAttackAfterStart = false;
        currentFrame = 0;
      } else {
        isPlayingStart = true;
        isPlayingOver = false;
        shouldSwitchStay = true;
        shouldPlayAttackAfterStart = true;
        currentFrame = 0;
      }
    }
  } else if (keyCode === 82 && !isPlayingAttack && !shouldPlayAttackAfterStart) {
    if (isUsingStay2) {
      isPlayingOver = true;
      isPlayingStart = false;
      shouldSwitchStay = true;
    } else {
      isPlayingStart = true;
      isPlayingOver = false;
      shouldSwitchStay = true;
    }
    currentFrame = 0;
  }
  
  // 澄閃的按鍵控制
  if (keyCode === 74) { // J 鍵攻擊（原本是 / 鍵）
    if (!chengIsPlayingAttack) {
      if (chengIsUsingStay2) {
        chengIsPlayingAttack = true;
        chengIsPlayingStart = false;
        chengIsPlayingOver = false;
        chengShouldPlayAttackAfterStart = false;
        chengCurrentFrame = 0;
      } else {
        chengIsPlayingStart = true;
        chengIsPlayingOver = false;
        chengShouldSwitchStay = true;
        chengShouldPlayAttackAfterStart = true;
        chengCurrentFrame = 0;
      }
    }
  } else if (keyCode === 75 && !chengIsPlayingAttack && !chengShouldPlayAttackAfterStart) { // K 鍵切換（原本是 . 鍵）
    if (chengIsUsingStay2) {
      chengIsPlayingOver = true;
      chengIsPlayingStart = false;
      chengShouldSwitchStay = true;
    } else {
      chengIsPlayingStart = true;
      chengIsPlayingOver = false;
      chengShouldSwitchStay = true;
    }
    chengCurrentFrame = 0;
  }

  // 修改 keyPressed 函數中的 L 鍵邏輯
  if (keyCode === 76) { // L 鍵
    let currentTime = millis();
    if (!chengIsPlayingAttack && !chengShouldPlayAttackAfterStart) {
      if (!chengIsDashing && chengCanDash && currentTime - chengLastDashTime > chengDashCooldown) {
        // 計算預期的目標位置
        let potentialTargetX;
        if (chengIsFacingLeft) {
          potentialTargetX = chengX - chengDashDistance;
        } else {
          potentialTargetX = chengX + chengDashDistance;
        }
        
        // 檢查目標位置是否在有效範圍內
        let minX = 50;  // 左邊界保留空間
        let maxX = width - 150;  // 右邊界保留空間
        
        // 只有當目標位置在有效範圍內才執行位移
        if (potentialTargetX >= minX && potentialTargetX <= maxX) {
          chengIsDashing = true;
          chengCanDash = false;
          chengLastDashTime = currentTime;
          chengDashStartX = chengX;
          chengDashTargetX = potentialTargetX;
        } else {
          // 如果超出範圍，調整到最近的有效位置
          if (potentialTargetX < minX) {
            if (chengX > minX) {  // 只有當當前位置不在最小值時才執行
              chengIsDashing = true;
              chengCanDash = false;
              chengLastDashTime = currentTime;
              chengDashStartX = chengX;
              chengDashTargetX = minX;
            }
          } else if (potentialTargetX > maxX) {
            if (chengX < maxX) {  // 只有當當前位置不在最大值時才執行
              chengIsDashing = true;
              chengCanDash = false;
              chengLastDashTime = currentTime;
              chengDashStartX = chengX;
              chengDashTargetX = maxX;
            }
          }
        }
      }
    }
  }
}

function restartChengGame() {
  // 重置所有狀態
  chengCurrentHealth = chengMaxHealth;
  chengIsDead = false;
  chengIsPlayingDie = false;
  chengDieCurrentFrame = 0;
  chengCurrentFrame = 0;
  chengIsPlayingAttack = false;
  chengIsPlayingStart = false;
  chengIsPlayingOver = false;
  chengIsPlayingShot = false;
  chengIsUsingStay2 = false;
  chengX = width * 0.93;  // 調整水平位置（0.8 表示在視窗寬度的 80% 處）
  chengY = height * 0 -20 ; // 調整垂直位置（0.3 表示在視窗高度的 30% 處）
  
  // 移除重新開始按鈕
  if (battleEndButton !== null) {
    battleEndButton.remove();
    battleEndButton = null;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  chengX = width * 0.93;  // 調整水平位置（0.8 表示在視窗寬度的 80% 處）
  chengY = height * 0 -20 ; // 調整垂直位置（0.3 表示在視窗高度的 30% 處）
  if (currentHealth <= 0) {
    isDead = true;  // 保持死亡狀態
  }
  if (gameOver) {
    battleEndButton.position(width/2 - 50, height/2 + 50);
  }
}

// 在檔案末尾添加碰撞檢測函數
function checkCollision(rect1, rect2) {
  return rect1.x < rect2.x + rect2.width &&
         rect1.x + rect1.width > rect2.x &&
         rect1.y < rect2.y + rect2.height &&
         rect1.y + rect1.height > rect2.y;
}

function drawDashCooldown() {
  let currentTime = millis();
  let cooldownRemaining = max(0, chengDashCooldown - (currentTime - chengLastDashTime));
  let cooldownPercentage = cooldownRemaining / chengDashCooldown;
  
  // 位移圖示的位置和大小
  let iconX = width - 310;  // 位於血量條左側
  let iconY = 27;
  let iconSize = 30;
  
  // 繪製圓形底色
  noStroke();
  fill(50);
  circle(iconX, iconY, iconSize);
  
  // 繪製冷卻遮罩（從上方開始順時針旋轉）
  fill(255 , 180 , 220);
  arc(iconX, iconY, iconSize, iconSize, 
      -HALF_PI, 
      -HALF_PI + TWO_PI * (1 - cooldownPercentage));
  
  // 繪製圖示（可以是一個簡單的箭頭）
  if (chengCanDash) {
    fill(0, 255, 255);  // 可用時為青色
  } else {
    fill(150);  // 冷卻中為灰色
  }
  
  // 繪製箭頭
  push();
  translate(iconX, iconY);
  stroke(255);
  strokeWeight(2);
  noFill();
  // 繪製箭頭主體
  line(-8, 0, 8, 0);
  // 繪製箭頭頭部
  line(8, 0, 4, -4);
  line(8, 0, 4, 4);
  pop();
  
}

// 添加繪製不可位移區域的函數
function drawDashInvalidArea() {
  // 設置半透明的藍色
  noStroke();
  fill(0, 100, 255, 50);  // RGB(0,100,255) 藍色，透明度 50
  
  // 左側不可位移區域
  rect(0, 0, 50, height);
  
  // 右側不可位移區域
  rect(width - 50, 0, 150, height);
}

// 添加重置函數
function resetGame() {
  // 重置遊戲狀態
  gameOver = false;
  battleEndButton.hide();
  
  // 重置拉菲艾拉
  currentHealth = 100;
  isPlayingDie = false;
  isDead = false;
  isPlayingStart = false;
  isPlayingOver = false;
  isPlayingAttack = false;
  isPlayingShot = false;
  isWalking = false;
  isUsingStay2 = false;
  isFacingLeft = false;  // 重置面向
  characterX = 0;  // 重置到初始X位置
  characterY = 0;  // 重置到初始Y位置
  
  // 重置澄閃
  chengCurrentHealth = 100;
  chengIsPlayingDie = false;
  chengIsDead = false;
  chengIsPlayingStart = false;
  chengIsPlayingAttack = false;
  chengIsPlayingShot = false;
  chengIsWalking = false;
  chengIsUsingStay2 = false;
  chengIsFacingLeft = true;  // 重置面向
  chengX = width * 0.93;  // 重置到初始X位置
  chengY = 0-20;  // 重置到初始Y位置
  chengIsDashing = false;  // 重置位移狀態
  chengCanDash = true;    // 重置位移冷卻
  
  // 重置所有動畫幀
  currentFrame = 0;
  chengCurrentFrame = 0;
  dieCurrentFrame = 0;
  chengDieCurrentFrame = 0;
}

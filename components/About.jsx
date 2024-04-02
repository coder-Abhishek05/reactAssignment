import React from "react";
import Card from "./card";
function About() {
  return (
    <div>
      <div className="about_content">
        <h1>About Company</h1>
        <p>
        SonicWave is more than just a brand; it's a promise of unparalleled audio 
        excellence and uncompromising quality. Whether you choose to immerse 
        yourself in the immersive soundscapes of our wireless headphones or revel 
        in the freedom and convenience of our earpods, SonicWave invites you to 
        embark on a journey of sonic discovery. So why be tethered by wires when 
        you can soar to new heights with SonicWave? Experience the future of audio 
        today and let your music set you free.
        </p>
        <p>
        SonicWave wireless headphones redefine the boundaries of audio excellence, 
        offering a harmonious blend of superior sound quality, ergonomic design, 
        and advanced features. Immerse yourself in a sonic oasis with crystal-clear 
        highs, rich mids, and deep, resonating bass that brings your music to life.
        Equipped with state-of-the-art active noise cancellation (ANC) technology, 
        SonicWave headphones create a serene sanctuary amidst the chaos of everyday 
        life, allowing you to escape into your own world of sound. Whether you're 
        commuting to work, embarking on a cross-country journey, or simply 
        unwinding at home, SonicWave headphones provide the perfect soundtrack for 
        every moment.
        </p>
        <p>
          SonicWave earpods epitomize the epitome of wireless convenience, offering
           a seamless blend of style, comfort, and performance in a compact, 
           portable package. Slip these sleek, ergonomic earpods into your ears and
            embark on a journey of auditory bliss. With intuitive touch controls and 
            seamless Bluetooth connectivity, SonicWave earpods put the power of music at
           your fingertips, allowing you to effortlessly navigate your playlist, manage 
            calls, and access voice assistants with a simple tap or swipe. Whether you're
            breaking a sweat at the gym, tackling your daily commute, or enjoying a 
            leisurely stroll through the park, SonicWave earpods stay securely in place, 
            delivering immersive sound and unparalleled comfort throughout the day.
        </p>
      </div>
      <h1>Meet our team</h1>
      <div className="cards-2">
        <Card
          img="https://t3.ftcdn.net/jpg/06/17/57/10/360_F_617571082_h7lPyVkbEic3tX1U4ipg0zHtELC4eUaa.jpg"
          title="Ms. Charlotte Carry"
          sub="Web-Developer"
          description='"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do."'
        ></Card>
        <Card
          img="https://insertface.com/fb/1093/business-formal-woman-1092889-5tf8i-fb.jpg"
          title="Ms. Ivy Brown"
          sub="Director"
          description='"The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand."'
        ></Card>
        <Card
          img="https://www.realmenrealstyle.com/wp-content/uploads/2021/07/Suit-Jacket-Details.jpg"
          title="Mr. Ash Kecchum"
          sub="Director"
          description='"Opportunities are usually disguised as hard work, so most people dont recognize them."'
        ></Card>
        <Card
          img="https://www.realmenrealstyle.com/wp-content/uploads/2023/08/How-To-Buy-The-Right-Watch-Sizes-For-Your-Wrist.jpg"
          title="Mr. Robert Murphy"
          sub="Head Manager"
          description='"The only place where success comes before work is in the dictionary"'
        ></Card>
      </div>
    </div>
  );
}

export default About;

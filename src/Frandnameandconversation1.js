import React, { useState } from 'react';

//messenger upNav
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';

//messenger downNav
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';

import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';


function Conv1 () 
{

    return(
        <>
        <div className="convenav">
            <RadioButtonUncheckedIcon className="frndconvercir"></RadioButtonUncheckedIcon>
            <AccountCircleIcon className="frndconverac"></AccountCircleIcon>
               <div className="frndnmeconverstaus">
               <p className="frndconvername"> JAI shree ram1</p>
               <p className="frndconverstatus"> JAI shree ram1</p>
               </div>
               <InfoTwoToneIcon className="converoutline"></InfoTwoToneIcon>
            </div>
           <p className="convedownnavthif">
            <button className="convedownnav">
             <SentimentSatisfiedTwoToneIcon className="convedownnavimog">
                  </SentimentSatisfiedTwoToneIcon>

                  <input type="text" placeholder="Message...." 
                  className="convedownnavinput"></input>
                        
                   <FavoriteBorderTwoToneIcon className="convedownnavlove">    
                   </FavoriteBorderTwoToneIcon>
                  
            </button>
           </p>
            <div className="conversation">
            <div className="conversation2"></div>
            <div className="Mess">

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                    Hello 
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    Hii
                </p>
                </p>
                <p className="mesgwidth mesgwidthsender">
                <p className="msgsender">
                    How are you ?
                </p>
                </p>
                
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    fine....but i am feeling sad 😞 so,what about you ?
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    what are doing today....?
                </p>
                </p>
                <p className="mesgwidth mesgwidthsender">
                <p className="msgsender">
                    i am going to home 💗 , so tell me how is the day..?? 🥰
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    All good, i also want ask something about your life 😃..
                </p>
                </p>
                <p className="mesgwidth mesgwidthsender">
                <p className="msgsender">
                    what..?? 🤔
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    your real name is pandit and shweta is your bestfriend 😄 😄
                    Now, Many people's talk about you and your bestfriend shwetaa.. 😃. 
                </p>
                </p>
                <p className="mesgwidth mesgwidthsender">
                <p className="msgsender">
                    how you know about me..?? 🤔 🤔
                    and who told you this shit about me.. 😃.
                </p>
                </p>
                <p className="mesgwidth mesgwidthsender">
                <p className="msgsender">
                    even i don't know any shweta 😃..
                </p>
                </p>
                <p className="mesgwidth mesgwidthsender">
                <p className="msgsender">
                    may be she is your bestfriend...😃 😃 
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    no no bro she is your bestfriend and she told to everyone
                    when she was attainding class and  by mistake she didn't mute her mic 😃😄😄😄..
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                anyway bro can you give me your gf's no. becouse today i am feeling sad as well as depress 
                , may be she could help me when i will talk to her... 😄😄..
                </p>
                </p>
                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://pbs.twimg.com/media/Ej0F7qnU0AAv_EF.jpg"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                   Bro i'm really feeling depress 😄😄....    
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="picmsgreceiver">
                <img src="data:image/jpeg;base64,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"
                alt="Not found" className="picmsgreceiver2"></img>
                </p>
                </p> 
                <p className="mesgwidth mesgwidthsender">
                <p className="msgsender">
                    I have not any gf if you have then introduce her to me..😃🤗..
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                   i have not, but bro if you have not any gf then how can shweta says that 
                   'pandit is good boy and he told me about his life' and you told her about 
                   your gf too.. 😃😄😄😄..
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="picmsgreceiver">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBASEhIPEBAQEBAQDw8QDw8PEBAPFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAPFSsZFRktKystKysrLSsrKystLS0tKy0tLS0tLS0tLSs3Ny0rLS0tKystNzcrKystKysrLSsrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADcQAAIBAgQEBQMBCAIDAQAAAAABAgMRBAUhMRJBUXEGIiNhgRMykaEUQlJiscHR4TNyFaLxFv/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EACARAQEBAQACAwEBAQEAAAAAAAABEQIDMRIhQVFhMgT/2gAMAwEAAhEDEQA/APL8LHyCkiXCR8iI6m4AhJCR0EVjtjiOkkVVDIolqIZASekdQhAdINprQDRY0Y6CDbC4SVITiOBFY6oknCdSFGWGyRK0NcSSKxwlcRrJGCZ1nApI78CESL4EcEWJw7YVhFgcYblquwMMyyWrGQhc8p2M/M0edSvcz1SO4hCyORI0MmYBohWEPyqaXCR9NA1Zah+Ej6aAsStQaRI7Y4OQIkdOHeEgjqbDYD5oahJ1hI4hyQJ2JbUI+VFTEvMHDyoYjVEbKITwHVQZpBIxJPphlHC3klYNq4GyLFim4BkoljVoMGlSFYF4RjgFfTY2VMkEcRtidogq1YrVtGU6cscpVovZp/JNwkELQiVxGNDSaI6cDU5Ylw8+FsjsSUad7iAuYVbsqaj1LHH0mmV00OlCyOZLYjqGayZc4dEORNthafpx7FTi/uZe0IenH/qUWL+5mWqgHJiOJAHTqEdRIyoMJJjCajsB6Q2I9kHUaXL6fk+DNI1+XU/TXYYkVKjdh0MLbkLDU/Mu5YxpHSRuQLg8P5rhuKpqw1RsxtebYtYra0QWpSLCcQSvVirrdrktzFrPxt9Bo4e7stWTSy+yvJpHaebQjGyhNN7ydmr/AAPxKf0nUlsktOr6HHryfx6fH4Jm9K3F0YKLkn29zO4vDxk+f5LOtiXK/FouS6FZXqxW0r+/IzOq11xz/Af/AIibfpeaS1UV93x1G4LM5wfDO7s7NS0afRhP1WndOzWzTZFmUnW8z1qJay0XEl19zrK83XH8XVGqpRTWzJGjL4PMJ03beK5Gnw9aM43TXboa1yNcTnCSNHGSR8BbZDhuKUtCsRpvBsLzl8GuTIrPEGWNXdjKPDNs9X8Q4VcL0MZl+DUptPqavJ6jJYmi4vVA1RGt8WZeoRUkjJzOdjBiQhWEIeh4ePpLsZ3GLzs0VJ+muxncZ9zM2N1Aztjlh6QA2w6whEkcmR3JZkZI6LHnIxH2JORNplT9OPYxljX5M7wQxqLShDULRHhqZO4HbG8RtEc4hHCMkiw4GhhnJ22XN9ECY6VKDVOnwupJ2Wq4pN9SxqUk463s+Sbjf2fsAOcaf1akKcJVKcU6cIq7u9Ls8vkv3j2+DifHQWbUZ0IpWi5Le6drmbxviKtJfTfAofwqNjTeK8bUlR4nFxnKMZcLtpJrVP8AJgaFTjnwSVpO9mub6BIPLfj9QcsbxrhaSltcnjlMGruTb9rWRSVotSfWL1LLCeePllJS5q90/gMcpd+qFxFJwe90MhLmE15uzjNWf7slswOOhqMdBsZT1ul37ncvxjpy02ejTJ5QumgGpE6OHUxsaU+JJ9Vc7Yr8jxClT4ecd+3UsjTBljVeB/vl8f3MszS+C36j+BjU9tPnsfK+xjcsVqr7m1zr7X2MZgF6r7nStdIfGy9E89bPQvGv/EeetHPv6YsdOHYxEZD0TCwvCPYoM1p2mX2X1fKuxV59DVMr6VVCZ1jUdRkHCOXOkUdRDIrUfVGwZJIh41CRJ1mmyGpolqZll9kjs0ahjaYGJPUiQYGewXXR2jrAshijd26j5kmD+67+DPVyN887QOd11SpuXPZIxVLNK0ZyqUozcrNcSi3o90avMqSr1pcd1QoW47accv4QyhhazjJuFPD00rU4KPm9rnjv3de/1JNx57mHiDEyXmv0s4JFLTxz4lLRS5No2viDJ6kZ3v8AUk1dpK1tL/JksZhVK7StJcvcZXn8nP7KnyaMZVJOWrmrD8VheFu110KzB1JRkuTTNBjHdJ82ip4y8/6oqjb3bGJE1eOpHFC49+yRDiaPMlk7MXErG44dmZPX4aqvtJcP+DUWMXJWlpyehsMNNuMW97am45uy3L/wdL1n8FBMvfB79Z9kans8+2vzt+V9jHZc/Wfc2WdLyPsYfBTtWfc3W+3fG/8AxI89ZuPGlfyJGGkY6c6cmIbB6CMhucLNpR7Aub1L2CbWKvH1LsqQkTqQ1SO3Mo445HLjGyRVGNix0kNihSSEh5CSRYI4vso5GfvqajKo+RP2GGNJgZ7FnWehSYKRafU0R25rpKZNHHV4X/1hKcv6Ifa7XcrM+xKhTry5tqCfstzj5q9Xg526gxOMhTp0KbfnrV6Tl11ld6fBnfGXiatOpJ0qtWFNTkoJeS6Ta4vfUrc8p15yoSUZO8VwWT+5vQOzDw7WVGnKdP6slBJpSSUVv8s5R07ttxSYPxXiabfFUdWLVnGo+L8PdMvPEdOEqdOvS4fptR0i02m1dp26XMxUy+zfE1B9HcKwldwoypqS1ba5pdfz/YrHDnZ9UXh8LtO107WduoVmb80UudgvJlGeGpxejjUnd8+BPRAdSf1MR/Kv6INdcyK3HRtIGQXj5XkwNsY5d+0dZkUnp3O1N2R8fI3Hn7R1JbM1+Gfki77xRkJmrwbtTgukUbjmkZe+D36z7IoWy78IP1/hDL9tcttm78nwYTCL133NxnMvL8GIwL9f5Ola7B+NYeVGKmb7xvD0kzBMx0501SEcsdBNg8cn/wDAStBSvqU0sZJEX7fLqGwasa/l5gqxaA6uIctyJsEsXizixZXCBLOWNGPGor2zglYftov2wr0IEsljDSZTmXpmJL3LY+TcYtaqhnaQb/8Aoo2MM6jT3E6zNwyvQstzuNSrCC3b0+E2LFYX69SFOW2tSfum72Mz4Og5YqL/AIadSX/q1/c21Ly1btbxtf2scPLdr3/+b/mpMRh48NmlZWWy5GbzOh5ZW2+S8x2Pjdqz+LGXzHHavl3DXoZnMKerBKVOz2RY19Wco4dXu9i15up9jsNiOCjJvnov72BcA7RqTfN2XYHx2J4mox2WlkNrVLRUFy1l3CRXoycrtsjYrjWzo5W6SXMbOz5L55iqfa7a/wBvcVN6J9NwoyekVSlZxts2i5WPjYqa09FyIUajj3Mq6lmCD8jz2NKrxMyzGs0w9bxOeRqwvFp6GVePVOpxPqVeXYhxp2RX42u2zUpvWtHn2bRrwUY2MhW0dgjDTaTYHWldsBp1xDLiIC6lH3BnTCqvHsDTi7maDWhp2zOcLAkI6os64skazh0coiTRD+ETiAMNj4dyWNSg5ttaPmZHhNj4fpS+jZO1zXKVmIwSjJq/6oieFXUuquTNvdsieSO+5pLPwBhfWrS3tS4U+nE/9GznSTSfsVfg7LlRpz6zlv7Wsi1rXSdtjh2+n4JnEUGJhabb9zO5mk2y/wA2qNJ2i2/zYyeJVWTflt7ydjDr1foPUqKIFVxL2XPkS1cO3u/wNjGMdld9TTx3UcYcC4nrJ7LuMb6kk1fUimagpXI60tDqZxixXaVVW6C0X9wOvK8tOQZQw7a1uWM/NFN3Y24S8Kc/Z0a9OVocdBXaXMldBFn4fwSnWSfQtWCVTjGn8FJiNZaG+znKlGF10M3lOCjKo79TRxT1bRgV1zReKsPGNrGeSAEI7YRJpcRQW5T4iOppMRTtyM9jvuABmcOiAEcZ0RJDzJSN7j7iYdY4cR1BqJG68OU/ST9jCm48Ny9FL2NcmLaVU7RoupJJLu+iBaklFOUmoxjrKT2SKDMPGripU8NFJbOrLWUvdIbWp/ra/wDmY4erCjVTjCa9OrybX7r6Mt/rRmrxaemp47luOnWqt1akqmj9Nxc+K/JJbGvyzMYwhxxbUYvhnRqSSqw94/xROVj2+Lzy/VWebtq9rfkyONry1/yXWb4+k6fGp24uV1d9kZh1OOTUFe3OcrL9DPxa8nl5iKc/cZKog+phk6fHwQjOGlSELtcPKok9bbXBWo+34H4vNfKElWQyU+/4YVKy2S/qQVJWN453yIHNHZbMjq1r6WI+JrTqWL5aWHp8U/1Zb/UtogfC0OGPu9ySxObrqDOI40JIk6y18MTtWTKqSLTw1G9ZdhLXZ7irwt7GRwVZxqadTS5zHT4MvhoXqfI02oPElRyaKIu/ECs0UlwZpwhWEQbjErRmXxy8zNHUqaMzWNfmZEOIQgZcExHVHv8Agiie49Inp4CpJ6Rsur0DI5alrJ39kRkVthWLH6euiil1erH0cNKW15eyjr+hNfFWWNr4cfpJcyDL8kb1naK/h3k+75Fxi+ChQnNJR4I+Xleb0j+pa1OGP8W5m5y+jFtQpvzfz1Or7bGcitSau25NvVt3fdllkeWfUneWiWvc1rFWsqMKapyptRuk1N7pvfsCYqk7vzOX8ys0/dewRmmIoxioScmk5K8LXhK366mdnPo9Ab2fg3FYx/a7VFHRN8va5HTzKcbKKjFdLaATdiSVZ2SW3YXO0b/5aSnGemj8yWzg9JRa53VwrERUZyS2u+H/AKvVfpYpFTb7FviZu0W/4IX/AB/oFqGvWsv7AfE27sUnd3/B1oEjaH0ppNOSuhbnVAUOljoJc32TGwxkejBooY9wODlNPYQCpE0az56kBDZbeFX667FKqq7Fl4exCjWi7pctWJjZ5/Hy39jKZcr1GazP5en3XwZHA/exND+JtygRe+I90UQVmnCEI1gamVW5SYv7mXKtzKXGLVmEgCKODlJJu8VJ2j/M/ZBeTZeqjc53VKH/ALS6FnlNP6spz0tF/Tj7JdCa550DQyyK38z/AEDI0klokuxbzw6SK+sZ10nOBJzBqsieqyKjWUakZSjxxT80eqCHBODy2c9fti9pNXv2XM0OW4KNONo3bf3TduJ/6H08RSlTVSM0491dPpbkCVMzd7JJLm3uaaWnGoav8c2UvijFqVFXWkZXjHnOT0V0SU05S4m+2twCdRVMU5S1pYSP1JLlKp+7H8/0AdJMpyKMq9GlNRlaLnXen3SV7dktADN8XRp1qsaTk4ppKUGldrddv8HZ5hUipOL9StxRvfVRk9SixdNJWUk2vuSvp/k6RyuI1etVhFLeW3zdtsIzyjFV3GmrR8qjHdrRaMk8MyUa3G4qXDGTSfYDxNeTqufPi4l+R2DD45bN3vpw73XQZQwrcuFct3yRpsXi4vBQqXj9avPZfupOzVv17so4zsrLS5kHKPC+GC4pPnZuzFmFNx4Iyd3wJv8AXQsMuo2atu9blfmlfjqPpHyoEDSHqJxRJYIjiN0Bs5pbh0dhtSimiOK51+iOJN6kjhwuz25MeiERxR1kiiccSViNsSYmjliAuhmdWMeFTk4fwSd1/olo5o4tvhTfu7IreY+K5vYTT8xzCdV+ZKK6K/8AUDUmFymumhDVhzQ+wZxiEhBianELT9ClxH3W+EdECavM6P7Pg6cI24lFuT6ye4/wlTX7Onzcm33YhBXbBuZVlFWW7Kitp/UQjJqvq1LskoYByXE3aN9ub/wIQwQVjrQ4Yw0SWvu+pLh6XFZvYQhGjMVVVKm3zSuUFCq/oJfvV6spzfWMW4xX9RCKKga+ItU20jp/sEnZXfFfR8KtyfUQjpPTn0scgpxSnUnfhirJLdt7IBzGMX5oJxTbTi3ez7iEX4vYak5NqK+L7K4fKg4ySe+ghGaIv69P9nw/G/8Akqq0P5U+Zl2xCMRo+GpLAQjS/U0B1xCKtAsdU2XNsZSQhEx+iFTGVFYQiKBITRwQhxLUfI4IP0GNDrXQhGkFaOiESf/Z"
                alt="Not found" className="picmsgreceiver2"></img>
                </p>
                </p> 
                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://pbs.twimg.com/media/Ej0F7qnU0AAv_EF.jpg"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>
                <p className="mesgwidth mesgwidthsender">
                <p className="msgsender">
                   okk bro.. i am going to sleep...
                   good night my heart  ❤️❤️.. 
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                   okk bro ..good night 💗
                   sweet dreams of your gf.. 😄😄❤️
                </p>
                </p>
                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://pbs.twimg.com/media/Ej0F7qnU0AAv_EF.jpg"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>
            </div>
            </div>
        </>
      
    );
}

export default Conv1;
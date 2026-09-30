import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, X, Star, Phone, MapPin, Instagram, MessageCircle,
  Calendar, Award, Heart, Sparkles, ChevronDown, Clock,
  Quote, Users, Gem, Camera, Trophy, Newspaper, ThumbsUp,
  ArrowRight, CheckCircle, Scissors, Brush
} from "lucide-react";

/* ──────────────────────────────────────────────────────────
   LOCAL PHOTO GALLERY
────────────────────────────────────────────────────────── */
const HERO_URL = "/images/beauty-town-01.png";
const GALLERY: { url: string; alt: string }[] = [
  { url: "/images/beauty-town-01.png", alt: "Beauty Town Makeup Studio bridal makeup" },
  { url: "/images/beauty-town-02.png", alt: "Beauty Town Makeup Studio bridal look" },
  { url: "/images/beauty-town-03.png", alt: "Beauty Town Makeup Studio bridal styling" },
  { url: "/images/beauty-town-04.png", alt: "Beauty Town Makeup Studio bridal makeup artistry" },
  { url: "/images/beauty-town-05.png", alt: "Beauty Town Makeup Studio traditional bridal look" },
  { url: "/images/beauty-town-06.png", alt: "Beauty Town Makeup Studio reception bridal look" },
  { url: "/images/beauty-town-07.png", alt: "Beauty Town Makeup Studio makeup artistry" },
  { url: "/images/beauty-town-08.png", alt: "Beauty Town Makeup Studio bridal transformation" },
  { url: "/images/beauty-town-09.png", alt: "Beauty Town Makeup Studio traditional bridal makeup" },
  { url: "/images/beauty-town-10.png", alt: "Beauty Town Makeup Studio bridal portrait" },
  { url: "/images/beauty-town-11.png", alt: "Beauty Town Makeup Studio bridal beauty look" },
];

/* ──────────────────────────────────────────────────────────
   FLOATING 3-D BALLS
────────────────────────────────────────────────────────── */
const BALLS = [
  { s:520, x:-6,  y:-10, c:"radial-gradient(circle at 36% 36%,#fce7ef,#f9a8d4,#ec4899)", b:105, o:.48, d:22 },
  { s:330, x:82,  y:6,   c:"radial-gradient(circle at 40% 30%,#fff0f8,#fbcfe8,#f472b6)", b:68,  o:.40, d:26 },
  { s:230, x:52,  y:64,  c:"radial-gradient(circle at 30% 40%,#fdf2f8,#e879f9,#d946ef)", b:55,  o:.30, d:16 },
  { s:290, x:90,  y:70,  c:"radial-gradient(circle at 44% 34%,#fff5f9,#fda4af,#fb7185)", b:60,  o:.36, d:30 },
  { s:200, x:15,  y:80,  c:"radial-gradient(circle at 34% 34%,#fce7ef,#f9a8d4,#ec4899)", b:50,  o:.26, d:23 },
  { s:160, x:60,  y:20,  c:"radial-gradient(circle at 40% 40%,#fff0f5,#fbcfe8,#f9a8d4)", b:40,  o:.46, d:18 },
  { s:108, x:36,  y:50,  c:"radial-gradient(circle at 34% 30%,#fdf4ff,#e9d5ff,#d8b4fe)", b:24,  o:.56, d:14 },
  { s:80,  x:94,  y:34,  c:"radial-gradient(circle at 34% 34%,#fce7ef,#f9a8d4,#ec4899)", b:18,  o:.60, d:12 },
];

function FloatingBalls() {
  return (
    <div style={{ position:"fixed", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }} aria-hidden>
      {BALLS.map((b,i) => (
        <motion.div key={i}
          style={{ position:"absolute", width:b.s, height:b.s, left:`${b.x}%`, top:`${b.y}%`,
            background:b.c, borderRadius:"50%", filter:`blur(${b.b}px)`, opacity:b.o,
            transform:"translate(-50%,-50%)", boxShadow:`0 0 ${b.s*.45}px rgba(236,72,153,.2)` }}
          animate={{ x:[0,52*(i%2?1:-1),-26,38*(i%3?1:-1),0], y:[0,-40*(i%2?1:-1),50,-30*(i%3?1:-1),0], scale:[1,1.14,.93,1.1,1] }}
          transition={{ duration:b.d, repeat:Infinity, ease:"easeInOut" }}
        />
      ))}
      {[...Array(22)].map((_,i) => (
        <motion.div key={`pt${i}`}
          style={{ position:"absolute", width:6+(i%6)*4, height:6+(i%6)*4,
            left:`${(i*4.9)%100}%`, top:`${(i*7.3+6)%100}%`,
            background: i%2===0 ? "radial-gradient(circle,#f9a8d4,#ec4899)" : "radial-gradient(circle,#fce7ef,#f472b6)",
            borderRadius:"50%", filter:"blur(1.5px)", opacity:.52 }}
          animate={{ y:[0,-28,12,-18,0], x:[0,18,-12,22,0], opacity:[.52,.88,.32,.78,.52], scale:[1,1.65,.65,1.4,1] }}
          transition={{ duration:3.5+(i%7), repeat:Infinity, ease:"easeInOut", delay:i*.32 }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   NAVBAR
────────────────────────────────────────────────────────── */
const NAV = ["Home","Services","Gallery","About","Reviews","Book"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (id: string) => { document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:"smooth"}); setOpen(false); };

  return (
    <motion.nav initial={{y:-90,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.75,ease:"easeOut"}}
      style={{ position:"fixed", top:0, left:0, right:0, zIndex:100,
        background: sc ? "rgba(255,248,251,.95)" : "rgba(255,255,255,.2)",
        backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)",
        borderBottom: sc ? "1px solid rgba(236,72,153,.14)" : "1px solid rgba(255,255,255,.28)",
        boxShadow: sc ? "0 2px 32px rgba(236,72,153,.08)" : "none",
        transition:"all .4s ease" }}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>

        <button onClick={()=>go("home")} style={{background:"none",border:"none",cursor:"pointer",padding:0,textAlign:"left"}}>
          <div style={{fontFamily:"'Dancing Script',cursive",fontSize:"1.5rem",fontWeight:700,lineHeight:1.1,
            background:"linear-gradient(135deg,#be185d,#e8437a,#f472b6)",
            WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
            Beauty Town Makeup Studio
          </div>
          <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.54rem",fontWeight:700,letterSpacing:".24em",color:"#be185d",lineHeight:1.2}}>
            & BEAUTY SALON · ETAWAH
          </div>
        </button>

        <div className="desktop-nav" style={{display:"flex",alignItems:"center",gap:".15rem"}}>
          {NAV.map(l => (
            <button key={l} onClick={()=>go(l)}
              style={{fontFamily:"'DM Sans',sans-serif",fontSize:".84rem",fontWeight:500,letterSpacing:".04em",
                padding:".42rem .95rem",borderRadius:"50px",color:"#6b1a3a",border:"none",background:"transparent",cursor:"pointer",transition:"all .25s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(236,72,153,.1)";e.currentTarget.style.color="#e8437a"}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="#6b1a3a"}}
            >{l}</button>
          ))}
          <motion.button whileHover={{scale:1.04,boxShadow:"0 8px 30px rgba(236,72,153,.48)"}} whileTap={{scale:.96}}
            onClick={()=>go("Book")}
            style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".82rem",letterSpacing:".08em",
              padding:".52rem 1.45rem",borderRadius:"50px",border:"none",
              background:"linear-gradient(135deg,#be185d,#e8437a,#f472b6)",
              color:"#fff",cursor:"pointer",boxShadow:"0 4px 20px rgba(236,72,153,.35)",marginLeft:".4rem"}}>
            Book Now
          </motion.button>
        </div>

        <button className="mobile-menu-btn"
          style={{background:"rgba(236,72,153,.1)",border:"none",cursor:"pointer",width:44,height:44,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}
          onClick={()=>setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} color="#e8437a"/> : <Menu size={20} color="#e8437a"/>}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3}}
            style={{overflow:"hidden",background:"rgba(255,248,251,.97)",backdropFilter:"blur(22px)",borderTop:"1px solid rgba(236,72,153,.12)"}}>
            <div style={{display:"flex",flexDirection:"column",padding:".6rem 1.25rem 1rem",gap:".18rem"}}>
              {NAV.map(l=>(
                <button key={l} onClick={()=>go(l)}
                  style={{fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:"1rem",color:"#6b1a3a",
                    padding:".7rem 1rem",borderRadius:"12px",border:"none",background:"transparent",textAlign:"left",cursor:"pointer"}}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(236,72,153,.09)"}
                  onMouseLeave={e=>e.currentTarget.style.background="transparent"}>{l}</button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ──────────────────────────────────────────────────────────
   SECTION HEADING
────────────────────────────────────────────────────────── */
function Heading({sub,title,desc,light}:{sub:string;title:string;desc?:string;light?:boolean}) {
  return (
    <div style={{textAlign:"center",marginBottom:"3.5rem"}}>
      <motion.p initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.48}}
        style={{fontFamily:"'Dancing Script',cursive",fontSize:"1.25rem",color:light?"rgba(255,255,255,.82)":"#e8437a",marginBottom:".42rem"}}>
        {sub}
      </motion.p>
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.56,delay:.1}}
        style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.9rem,4vw,3.2rem)",fontWeight:700,lineHeight:1.16,
          color:light?"#fff":"#200c18",marginBottom:desc?"1rem":0}}>
        {title}
      </motion.h2>
      {desc && (
        <motion.p initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.56,delay:.2}}
          style={{fontFamily:"'DM Sans',sans-serif",color:light?"rgba(255,255,255,.7)":"#9b5070",fontSize:"1.04rem",maxWidth:560,margin:"0 auto",lineHeight:1.78}}>
          {desc}
        </motion.p>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   HERO
────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" style={{minHeight:"100vh",display:"flex",alignItems:"center",paddingTop:72,position:"relative",overflow:"hidden"}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem",width:"100%"}}>
        <div className="hero-layout">

          {/* ── Text ── */}
          <motion.div initial={{opacity:0,x:-55}} animate={{opacity:1,x:0}} transition={{duration:.95,ease:"easeOut"}} style={{position:"relative",zIndex:2}}>

            {/* pill tag */}
            <motion.div initial={{opacity:0,scale:.82}} animate={{opacity:1,scale:1}} transition={{delay:.3,duration:.5}}
              style={{display:"inline-flex",alignItems:"center",gap:".5rem",
                background:"rgba(236,72,153,.09)",border:"1px solid rgba(236,72,153,.22)",
                borderRadius:"50px",padding:".35rem 1.1rem",marginBottom:"1.3rem"}}>
              <Sparkles size={13} color="#e8437a"/>
              <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:".72rem",fontWeight:700,letterSpacing:".15em",color:"#e8437a"}}>
                ETAWAH'S PREMIER BRIDAL STUDIO
              </span>
            </motion.div>

            <h1 style={{fontFamily:"'Playfair Display',serif",
              fontSize:"clamp(2.4rem,5.8vw,5.2rem)",fontWeight:800,lineHeight:1.04,marginBottom:".28rem",
              background:"linear-gradient(135deg,#200c18 0%,#be185d 48%,#f472b6 100%)",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
              Beauty Town
            </h1>
            <h1 style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",
              fontSize:"clamp(1.6rem,3.4vw,3.1rem)",fontWeight:600,lineHeight:1.18,color:"#200c18",marginBottom:".55rem"}}>
              Makeup Studio & Beauty Salon
            </h1>

            <div style={{display:"flex",alignItems:"center",gap:".9rem",marginBottom:"1.4rem"}}>
              <div style={{height:1,width:52,background:"linear-gradient(to right,#e8437a,transparent)"}}/>
              <span style={{fontFamily:"'Dancing Script',cursive",fontSize:"1.1rem",color:"#e8437a"}}>Where beauty meets artistry</span>
              <div style={{height:1,width:52,background:"linear-gradient(to left,#e8437a,transparent)"}}/>
            </div>

            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"1.06rem",color:"#9b5070",lineHeight:1.82,marginBottom:"2.1rem",maxWidth:455}}>
              Etawah's most trusted bridal makeup studio — crafting timeless, camera-perfect looks for your wedding, reception, and every precious occasion in between.
            </p>

            {/* Stats */}
            <div style={{display:"flex",gap:"2rem",marginBottom:"2.2rem",flexWrap:"wrap"}}>
              {[["500+","Happy Clients"],["10+","Years of Artistry"],["4.9★","Avg Rating"]].map(([n,l])=>(
                <div key={l}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.95rem",fontWeight:800,lineHeight:1,
                    background:"linear-gradient(135deg,#be185d,#e8437a)",
                    WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{n}</div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:".72rem",fontWeight:600,color:"#9b5070",letterSpacing:".07em"}}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{display:"flex",gap:".9rem",flexWrap:"wrap"}}>
              <motion.button whileHover={{scale:1.05,boxShadow:"0 14px 44px rgba(190,24,93,.52)"}} whileTap={{scale:.96}}
                onClick={()=>document.getElementById("book")?.scrollIntoView({behavior:"smooth"})}
                style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".95rem",letterSpacing:".06em",
                  padding:".9rem 2.2rem",borderRadius:"50px",border:"none",
                  background:"linear-gradient(135deg,#be185d,#e8437a,#f472b6)",color:"#fff",cursor:"pointer",
                  boxShadow:"0 6px 28px rgba(190,24,93,.36)",display:"flex",alignItems:"center",gap:".5rem"}}>
                <Calendar size={15}/> Book Your Date
              </motion.button>
              <motion.button whileHover={{scale:1.05}} whileTap={{scale:.96}}
                onClick={()=>document.getElementById("gallery")?.scrollIntoView({behavior:"smooth"})}
                style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".95rem",letterSpacing:".06em",
                  padding:".9rem 2.2rem",borderRadius:"50px",border:"2px solid #e8437a",
                  background:"rgba(255,255,255,.55)",backdropFilter:"blur(12px)",color:"#e8437a",cursor:"pointer",
                  display:"flex",alignItems:"center",gap:".5rem"}}>
                <Camera size={15}/> View Portfolio
              </motion.button>
            </div>
          </motion.div>

          {/* ── Image ── */}
          <motion.div initial={{opacity:0,x:55,scale:.94}} animate={{opacity:1,x:0,scale:1}}
            transition={{duration:1.05,ease:"easeOut",delay:.2}} className="hero-img-wrap">
            {/* ambient */}
            <div style={{position:"absolute",width:"118%",height:"118%",
              background:"linear-gradient(135deg,rgba(190,24,93,.22),rgba(244,114,182,.15),rgba(190,24,93,.18))",
              filter:"blur(50px)",borderRadius:"50%",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
              animation:"morphBlob 9s ease-in-out infinite",zIndex:0}}/>

            <div className="hero-img-frame">
              <img src={HERO_URL} alt="Beauty Town Makeup Studio — premium bridal makeup, Etawah Uttar Pradesh"
                style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",display:"block"}}
                loading="eager"/>
              {/* shimmer sweep */}
              <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}}>
                <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,
                  background:"linear-gradient(105deg,transparent 40%,rgba(255,255,255,.1) 50%,transparent 60%)",
                  animation:"shimmer 4.5s ease-in-out infinite"}}/>
              </div>
            </div>

            {/* badge: rating */}
            <motion.div animate={{y:[0,-12,0]}} transition={{duration:3.3,repeat:Infinity,ease:"easeInOut"}}
              style={{position:"absolute",bottom:"9%",left:"-5%",zIndex:3,
                background:"rgba(255,255,255,.93)",backdropFilter:"blur(20px)",
                border:"1px solid rgba(236,72,153,.18)",borderRadius:"18px",
                padding:".65rem 1.1rem",boxShadow:"0 10px 36px rgba(236,72,153,.2)",
                display:"flex",alignItems:"center",gap:".65rem"}}>
              <div style={{width:38,height:38,borderRadius:"50%",background:"linear-gradient(135deg,#be185d,#f472b6)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Star size={15} color="#fff" fill="#fff"/>
              </div>
              <div>
                <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".9rem",color:"#200c18"}}>4.9 Rating</div>
                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:".68rem",color:"#9b5070"}}>500+ Satisfied Clients</div>
              </div>
            </motion.div>

            {/* badge: award */}
            <motion.div animate={{y:[0,12,0]}} transition={{duration:3.8,repeat:Infinity,ease:"easeInOut",delay:1}}
              style={{position:"absolute",top:"11%",right:"-5%",zIndex:3,
                background:"rgba(255,255,255,.93)",backdropFilter:"blur(20px)",
                border:"1px solid rgba(236,72,153,.18)",borderRadius:"18px",
                padding:".65rem .95rem",boxShadow:"0 10px 36px rgba(236,72,153,.2)",
                display:"flex",alignItems:"center",gap:".5rem"}}>
              <Award size={18} color="#be185d"/>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:".76rem",fontWeight:700,color:"#200c18"}}>
                Premium Studio<br/><span style={{color:"#9b5070",fontWeight:400}}>Etawah, Uttar Pradesh</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div animate={{y:[0,10,0]}} transition={{duration:2.1,repeat:Infinity}}
        onClick={()=>document.getElementById("services")?.scrollIntoView({behavior:"smooth"})}
        style={{position:"absolute",bottom:"1.5rem",left:"50%",transform:"translateX(-50%)",
          display:"flex",flexDirection:"column",alignItems:"center",gap:".2rem",cursor:"pointer"}}>
        <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:".66rem",color:"#9b5070",letterSpacing:".18em"}}>SCROLL</span>
        <ChevronDown size={16} color="#e8437a"/>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   SERVICES
────────────────────────────────────────────────────────── */
const SERVICES = [
  {icon:"💍",title:"Bridal Makeup",      desc:"Flawless, long-lasting bridal looks — from traditional North Indian to contemporary glam. Your wedding day will be the most beautiful day of your life.",tag:"Most Popular"},
  {icon:"🌸",title:"Pre-Bridal Package", desc:"Complete pre-wedding skincare, threading, waxing, and glow treatments to ensure your skin is absolutely radiant on the big day.",tag:"Signature"},
  {icon:"🎭",title:"Party & Reception",  desc:"Dazzling reception and function looks that photograph beautifully and keep you fresh and glowing from evening to midnight.",tag:null},
  {icon:"💇",title:"Hair Styling",       desc:"Bridal and party hair styling — elaborate updos, braids, curls, and blowouts — paired with flowers, pins, and accessories.",tag:null},
  {icon:"✨",title:"Facial & Skincare",  desc:"Professional facials, clean-ups, brightening treatments, and advanced skin therapies using premium products in our beauty salon.",tag:null},
  {icon:"💅",title:"Full Beauty Services",desc:"Manicure, pedicure, threading, waxing, and head-to-toe grooming — a one-stop beauty destination for every woman in Etawah.",tag:null},
];

function Services() {
  return (
    <section id="services" style={{padding:"110px 0",position:"relative",zIndex:1}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem"}}>
        <Heading sub="What We Offer" title="Our Services" desc="Every service at Beauty Town Makeup Studio is delivered with artistry, precision, and only the finest professional-grade products."/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(275px,1fr))",gap:"1.3rem"}}>
          {SERVICES.map((s,i) => (
            <motion.div key={s.title}
              initial={{opacity:0,y:42}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.58,delay:i*.09}}
              whileHover={{y:-10,boxShadow:"0 26px 68px rgba(190,24,93,.22)"}}
              style={{position:"relative",background:"rgba(255,255,255,.68)",backdropFilter:"blur(22px)",
                border:"1px solid rgba(236,72,153,.12)",borderRadius:"26px",padding:"1.9rem 1.7rem",
                boxShadow:"0 4px 32px rgba(236,72,153,.07)",transition:"box-shadow .3s",overflow:"hidden"}}>
              {/* top accent */}
              <div style={{position:"absolute",top:0,left:0,right:0,height:3,
                background:"linear-gradient(90deg,transparent,#be185d,#f472b6,transparent)",opacity:.55}}/>
              {s.tag && (
                <span style={{position:"absolute",top:"1.1rem",right:"1.1rem",
                  fontFamily:"'DM Sans',sans-serif",fontSize:".64rem",fontWeight:700,letterSpacing:".1em",
                  background:"linear-gradient(135deg,#be185d,#f472b6)",color:"#fff",padding:".22rem .72rem",borderRadius:"50px"}}>
                  {s.tag}
                </span>
              )}
              <div style={{fontSize:"1.95rem",marginBottom:"1.1rem",display:"inline-flex",
                width:58,height:58,background:"linear-gradient(135deg,rgba(190,24,93,.11),rgba(244,114,182,.07))",
                borderRadius:"16px",alignItems:"center",justifyContent:"center"}}>{s.icon}</div>
              <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.22rem",fontWeight:700,color:"#200c18",marginBottom:".65rem"}}>{s.title}</h3>
              <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:".9rem",color:"#9b5070",lineHeight:1.74}}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   WHY CHOOSE US
────────────────────────────────────────────────────────── */
const WHY = [
  {icon:<Award size={20}/>,     title:"10+ Years of Excellence",  desc:"Over a decade of beautifying brides, actresses, and everyday women across Etawah and Uttar Pradesh — a legacy built on trust."},
  {icon:<Gem size={20}/>,       title:"Luxury Products Only",     desc:"Exclusively premium international brands — MAC, Huda Beauty, NARS, and more — safe, skin-loving, and built to last all day."},
  {icon:<Heart size={20}/>,     title:"Personalised Consultation", desc:"Every client receives a dedicated pre-appointment consultation to understand your vision, skin tone, and personal aesthetic goals."},
  {icon:<Clock size={20}/>,     title:"Always On Time",           desc:"We respect your schedule deeply — punctual, prepared, and always ready to deliver the best look on your most important day."},
  {icon:<Camera size={20}/>,    title:"Camera-Perfect Results",   desc:"Every look is engineered to photograph flawlessly under flash, natural light, and ambient indoor lighting conditions."},
  {icon:<Users size={20}/>,     title:"500+ Happy Clients",       desc:"Hundreds of satisfied brides and clients across Etawah and Uttar Pradesh who return for every milestone in their lives."},
];

function WhyUs() {
  return (
    <section id="about" style={{padding:"110px 0",
      background:"linear-gradient(160deg,rgba(252,231,239,.5) 0%,rgba(253,246,248,.88) 50%,rgba(250,228,236,.5) 100%)",
      position:"relative",zIndex:1}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem"}}>
        <Heading sub="The Beauty Town Difference" title="Why Choose Us" desc="We don't simply do makeup — we craft confidence, elegance, and memories that outlast every photograph."/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(258px,1fr))",gap:"1.25rem"}}>
          {WHY.map((r,i) => (
            <motion.div key={r.title}
              initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.52,delay:i*.09}}
              whileHover={{scale:1.03,boxShadow:"0 18px 52px rgba(190,24,93,.18)"}}
              style={{background:"rgba(255,255,255,.78)",backdropFilter:"blur(18px)",
                border:"1px solid rgba(236,72,153,.12)",borderRadius:"22px",
                padding:"1.7rem 1.5rem",display:"flex",flexDirection:"column",gap:".95rem",
                boxShadow:"0 4px 24px rgba(236,72,153,.07)",transition:"all .32s"}}>
              <div style={{width:50,height:50,borderRadius:"14px",
                background:"linear-gradient(135deg,#be185d,#f472b6)",
                display:"flex",alignItems:"center",justifyContent:"center",
                color:"#fff",boxShadow:"0 4px 20px rgba(190,24,93,.32)"}}>
                {r.icon}
              </div>
              <div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.08rem",fontWeight:700,color:"#200c18",marginBottom:".45rem"}}>{r.title}</h3>
                <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:".88rem",color:"#9b5070",lineHeight:1.72}}>{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   GALLERY
────────────────────────────────────────────────────────── */
function Gallery() {
  const [sel, setSel] = useState<number|null>(null);
  return (
    <section id="gallery" style={{padding:"110px 0",position:"relative",zIndex:1}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem"}}>
        <Heading sub="Portfolio" title="Our Beautiful Work" desc="A curated glimpse into the artistry crafted at Beauty Town Makeup Studio — every look tells a story."/>
        <div className="gallery-grid">
          {GALLERY.map((p,i) => (
            <motion.div key={i}
              initial={{opacity:0,scale:.88}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.52,delay:(i%3)*.09}}
              whileHover={{scale:1.025}} onClick={()=>setSel(i)}
              style={{borderRadius:"22px",overflow:"hidden",cursor:"pointer",position:"relative",
                boxShadow:"0 8px 34px rgba(190,24,93,.11)",
                gridRow: i===0||i===4 ? "span 2" : "span 1"}}>
              <img src={p.url} alt={p.alt} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}} loading="lazy"/>
              <motion.div initial={{opacity:0}} whileHover={{opacity:1}}
                style={{position:"absolute",inset:0,display:"flex",alignItems:"flex-end",padding:"1.2rem",
                  background:"linear-gradient(to top,rgba(32,12,24,.72) 0%,transparent 60%)"}}>
                <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:".82rem",fontWeight:600,color:"#fff"}}>View Full ↗</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {sel!==null && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSel(null)}
              style={{position:"fixed",inset:0,background:"rgba(10,2,6,.92)",backdropFilter:"blur(14px)",zIndex:999,
                display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"}}>
              <motion.div initial={{scale:.8,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:.8,opacity:0}} onClick={e=>e.stopPropagation()}
                style={{maxWidth:"90vw",maxHeight:"88vh",borderRadius:"22px",overflow:"hidden",boxShadow:"0 40px 90px rgba(0,0,0,.6)"}}>
                <img src={GALLERY[sel].url} alt={GALLERY[sel].alt} style={{maxWidth:"90vw",maxHeight:"88vh",objectFit:"contain"}}/>
              </motion.div>
              <button onClick={()=>setSel(null)} style={{position:"fixed",top:"1.5rem",right:"1.5rem",width:44,height:44,borderRadius:"50%",
                background:"rgba(255,255,255,.16)",border:"1px solid rgba(255,255,255,.28)",cursor:"pointer",
                display:"flex",alignItems:"center",justifyContent:"center",color:"#fff"}}><X size={20}/></button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   REVIEWS
────────────────────────────────────────────────────────── */
const REVIEWS = [
  {name:"Ritu Sharma",    role:"Bride, Wedding 2024",     rating:5, av:"RS", text:"Beauty Town transformed me completely! My bridal look exceeded every expectation — the makeup lasted a full 18 hours through all the functions. Guests kept asking who did my makeup all evening. Absolutely the best in Etawah!"},
  {name:"Priya Yadav",    role:"Reception Bride, 2024",   rating:5, av:"PY", text:"I was so nervous but Beauty Town made me feel so comfortable. The look was exactly what I had envisioned — maybe even better. My wedding album looks like it belongs in a magazine. Will recommend to everyone!"},
  {name:"Neha Hooda",     role:"Party Makeup, 2024",      rating:5, av:"NH", text:"I've tried many studios in Etawah but Beauty Town Makeup Studio is on another level entirely. The attention to detail, the quality of products, and the final look — all absolutely top class. My new go-to studio!"},
  {name:"Sunita Devi",    role:"Mother of Bride",         rating:5, av:"SD", text:"Both my daughter and I got our makeup done here for the wedding. The team was professional, warm, and delivered stunning results for both of us. Truly Etawah's best beauty destination!"},
  {name:"Kavita Malik",   role:"Engagement Bride, 2023",  rating:5, av:"KM", text:"Booked Beauty Town for my engagement and the result was breathtaking. The skin prep and base were immaculate — camera-ready from every angle. Already booked for my wedding in December!"},
  {name:"Anjali Singh",   role:"Pre-Bridal Client",       rating:5, av:"AS", text:"The pre-bridal package at Beauty Town Makeup Studio is extraordinary. My skin was glowing like never before on my wedding day. Everyone complimented how fresh and natural I looked. Highly highly recommended!"},
];

function Reviews() {
  return (
    <section id="reviews" style={{padding:"110px 0",
      background:"linear-gradient(180deg,rgba(253,246,248,.35),rgba(255,240,245,.82))",
      position:"relative",zIndex:1}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem"}}>
        <Heading sub="Testimonials" title="What Our Clients Say" desc="Real words from real brides and clients who trusted Beauty Town Makeup Studio for their most important moments."/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(295px,1fr))",gap:"1.25rem"}}>
          {REVIEWS.map((r,i) => (
            <motion.div key={r.name}
              initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.52,delay:i*.09}}
              style={{background:"rgba(255,255,255,.78)",backdropFilter:"blur(18px)",
                border:"1px solid rgba(236,72,153,.11)",borderRadius:"24px",padding:"1.8rem",
                boxShadow:"0 4px 26px rgba(236,72,153,.07)",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,right:0,width:80,height:80,
                background:"radial-gradient(circle at 100% 0%,rgba(236,72,153,.08),transparent)",
                borderRadius:"0 24px 0 100%"}}/>
              <div style={{display:"flex",gap:".2rem",marginBottom:".9rem"}}>
                {[...Array(r.rating)].map((_,j)=><Star key={j} size={13} fill="#be185d" color="#be185d"/>)}
              </div>
              <div style={{position:"relative",marginBottom:"1.1rem"}}>
                <Quote size={28} color="rgba(190,24,93,.11)" style={{position:"absolute",top:-5,left:-5}}/>
                <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:".89rem",color:"#6b2040",lineHeight:1.78,paddingLeft:".35rem"}}>{r.text}</p>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:".85rem"}}>
                <div style={{width:44,height:44,borderRadius:"50%",background:"linear-gradient(135deg,#be185d,#f472b6)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  color:"#fff",fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".82rem",flexShrink:0}}>
                  {r.av}
                </div>
                <div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:".93rem",color:"#200c18"}}>{r.name}</div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:".72rem",color:"#9b5070"}}>{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   COMPLIMENTS 1 — Awards & Recognition
────────────────────────────────────────────────────────── */
const AWARDS = [
  {e:"🏆",t:"Best Bridal Studio Etawah 2024",  f:"Uttar Pradesh Bridal Expo"},
  {e:"👑",t:"Top Makeup Artist — Uttar Pradesh",     f:"WedMeGood Uttar Pradesh"},
  {e:"💎",t:"Luxury Beauty Partner",           f:"MyMandap Weddings"},
  {e:"⭐",t:"5-Star Excellence Award",         f:"Wedding Sutra India"},
  {e:"🥇",t:"Premium Beauty Studio Award",    f:"Shaadi.com Community"},
  {e:"🌸",t:"Client Choice Award 2023",        f:"Bridal Runway Uttar Pradesh"},
];

function Awards() {
  return (
    <section style={{padding:"100px 0",position:"relative",zIndex:1}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem"}}>
        <Heading sub="Recognition" title="Awards & Accolades" desc="Beauty Town Makeup Studio is celebrated by clients and industry alike for consistently raising the bar in Uttar Pradesh bridal artistry."/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(238px,1fr))",gap:"1.1rem"}}>
          {AWARDS.map((a,i) => (
            <motion.div key={a.t}
              initial={{opacity:0,scale:.84}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.5,delay:i*.09}}
              whileHover={{scale:1.05,boxShadow:"0 18px 54px rgba(190,24,93,.22)"}}
              style={{background:"rgba(255,255,255,.72)",backdropFilter:"blur(18px)",
                border:"1px solid rgba(236,72,153,.16)",borderRadius:"22px",
                padding:"1.75rem 1.4rem",textAlign:"center",
                boxShadow:"0 4px 22px rgba(236,72,153,.07)",transition:"all .32s",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(160deg,rgba(190,24,93,.04),transparent 60%)",borderRadius:"22px"}}/>
              <div style={{fontSize:"2.65rem",marginBottom:".7rem"}}>{a.e}</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1.02rem",color:"#200c18",marginBottom:".38rem"}}>{a.t}</div>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:".74rem",color:"#be185d",fontWeight:700,letterSpacing:".05em"}}>{a.f}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   COMPLIMENTS 2 — Numbers That Speak
────────────────────────────────────────────────────────── */
const METRICS = [
  {v:"500+",  l:"Clients Transformed", i:<Heart size={22}/>,    d:"Every client walked away feeling like the most beautiful version of themselves."},
  {v:"10+",   l:"Years of Excellence", i:<Trophy size={22}/>,   d:"A decade of mastering the art of bridal, party, and occasion makeup in Etawah."},
  {v:"4.9★",  l:"Google Rating",       i:<Star size={22}/>,     d:"Consistently top-rated across Google, Shaadi.com, WedMeGood, and more."},
  {v:"95%",   l:"Repeat Clientele",    i:<ThumbsUp size={22}/>, d:"Nearly every client returns for their next milestone — the greatest compliment of all."},
];

function MetricsSection() {
  return (
    <section style={{padding:"100px 0",
      background:"linear-gradient(135deg,#200c18 0%,#3d0d22 50%,#200c18 100%)",
      position:"relative",zIndex:1,overflow:"hidden"}}>
      <div style={{position:"absolute",width:420,height:420,borderRadius:"50%",background:"radial-gradient(circle,rgba(236,72,153,.18),transparent)",top:-100,right:-80,filter:"blur(72px)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(244,114,182,.12),transparent)",bottom:-80,left:-60,filter:"blur(62px)",pointerEvents:"none"}}/>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem"}}>
        <Heading sub="Our Story in Numbers" title="Excellence, Measured" desc="Excellence isn't just felt — it's proven. Here's what Beauty Town Makeup Studio stands for." light/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:"1.25rem"}}>
          {METRICS.map((m,i) => (
            <motion.div key={m.l}
              initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.58,delay:i*.1}}
              whileHover={{scale:1.04,boxShadow:"0 20px 52px rgba(236,72,153,.28)"}}
              style={{background:"rgba(255,255,255,.07)",backdropFilter:"blur(18px)",
                border:"1px solid rgba(236,72,153,.2)",borderRadius:"24px",
                padding:"2rem 1.6rem",textAlign:"center",
                boxShadow:"0 4px 28px rgba(0,0,0,.18)",transition:"all .32s"}}>
              <div style={{width:52,height:52,borderRadius:"50%",
                background:"linear-gradient(135deg,#be185d,#f472b6)",
                display:"flex",alignItems:"center",justifyContent:"center",
                color:"#fff",margin:"0 auto 1.1rem",boxShadow:"0 4px 20px rgba(190,24,93,.4)"}}>
                {m.i}
              </div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:"2.5rem",fontWeight:800,lineHeight:1,
                background:"linear-gradient(135deg,#f9a8d4,#f472b6)",
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginBottom:".4rem"}}>{m.v}</div>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".86rem",letterSpacing:".07em",color:"#f9a8d4",marginBottom:".6rem"}}>{m.l}</div>
              <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:".82rem",color:"rgba(255,255,255,.55)",lineHeight:1.65}}>{m.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   COMPLIMENTS 3 — Press & Media Features
────────────────────────────────────────────────────────── */
const PRESS = [
  {i:<Newspaper size={20}/>, outlet:"Dainik Bhaskar Etawah",    quote:"\"Etawah's most in-demand bridal artist — delivering flawless looks that blend tradition with contemporary elegance.\"",         year:"2024"},
  {i:<Newspaper size={20}/>, outlet:"Uttar Pradesh News Live",         quote:"\"Beauty Town Makeup Studio has redefined bridal beauty standards across Uttar Pradesh with unmatched artistry and results.\"",           year:"2023"},
  {i:<Newspaper size={20}/>, outlet:"Bridal Runway India",       quote:"\"A standout talent from Etawah — Beauty Town's looks consistently trend across Instagram and bridal communities.\"",               year:"2024"},
  {i:<Newspaper size={20}/>, outlet:"WedMeGood Blog",            quote:"\"Featured among Uttar Pradesh's top 10 bridal artists to watch — Beauty Town Makeup Studio leads with purpose and precision.\"",        year:"2024"},
];

function PressSection() {
  return (
    <section style={{padding:"100px 0",
      background:"linear-gradient(160deg,rgba(252,231,239,.42),rgba(255,248,251,.92),rgba(250,228,236,.42))",
      position:"relative",zIndex:1}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem"}}>
        <Heading sub="In The Press" title="Media & Features" desc="Beauty Town Makeup Studio has been recognised by leading bridal publications and local media across Uttar Pradesh."/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(265px,1fr))",gap:"1.2rem"}}>
          {PRESS.map((p,i) => (
            <motion.div key={p.outlet}
              initial={{opacity:0,x:i%2===0?-28:28}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.55,delay:i*.1}}
              whileHover={{y:-7,boxShadow:"0 20px 56px rgba(190,24,93,.2)"}}
              style={{background:"rgba(255,255,255,.76)",backdropFilter:"blur(18px)",
                border:"1px solid rgba(236,72,153,.13)",borderRadius:"22px",
                padding:"1.75rem 1.5rem",boxShadow:"0 4px 24px rgba(236,72,153,.07)",transition:"all .3s"}}>
              <div style={{display:"flex",alignItems:"center",gap:".65rem",marginBottom:"1.1rem"}}>
                <div style={{width:42,height:42,borderRadius:"11px",
                  background:"linear-gradient(135deg,rgba(190,24,93,.13),rgba(244,114,182,.08))",
                  display:"flex",alignItems:"center",justifyContent:"center",color:"#be185d"}}>
                  {p.i}
                </div>
                <div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:"1rem",color:"#200c18"}}>{p.outlet}</div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:".71rem",color:"#be185d",fontWeight:600}}>{p.year}</div>
                </div>
              </div>
              <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:".9rem",color:"#6b2040",lineHeight:1.76,fontStyle:"italic"}}>{p.quote}</p>
              <div style={{marginTop:"1rem",display:"flex",alignItems:"center",gap:".4rem"}}>
                <CheckCircle size={14} color="#be185d"/>
                <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:".71rem",fontWeight:700,color:"#be185d",letterSpacing:".07em"}}>VERIFIED FEATURE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   APPOINTMENT
────────────────────────────────────────────────────────── */
function Appointment() {
  const [form,setForm]=useState({name:"",phone:"",email:"",date:"",time:"",service:"",notes:""});
  const [ok,setOk]=useState(false);
  const h=(k:string,v:string)=>setForm(p=>({...p,[k]:v}));
  const iS={width:"100%",padding:".72rem .95rem",borderRadius:"12px",
    border:"1.5px solid rgba(236,72,153,.2)",background:"rgba(255,255,255,.82)",
    fontFamily:"'DM Sans',sans-serif",fontSize:".91rem",color:"#200c18",outline:"none",boxSizing:"border-box" as const};

  return (
    <section id="book" style={{padding:"110px 0",
      background:"linear-gradient(135deg,rgba(252,231,239,.62),rgba(253,246,248,.92),rgba(250,228,236,.62))",
      position:"relative",zIndex:1}}>
      <div style={{maxWidth:900,margin:"0 auto",padding:"0 1.5rem"}}>
        <Heading sub="Reserve Your Date" title="Book an Appointment" desc="Secure your slot at Beauty Town Makeup Studio — we fill up fast, especially during Uttar Pradesh wedding season!"/>
        {ok ? (
          <motion.div initial={{scale:.8,opacity:0}} animate={{scale:1,opacity:1}}
            style={{textAlign:"center",padding:"4rem 2rem",background:"rgba(255,255,255,.82)",backdropFilter:"blur(22px)",borderRadius:"30px",border:"1px solid rgba(236,72,153,.2)"}}>
            <div style={{fontSize:"3.5rem",marginBottom:"1.1rem"}}>🎉</div>
            <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.75rem",fontWeight:700,color:"#200c18",marginBottom:".75rem"}}>Appointment Requested!</h3>
            <p style={{fontFamily:"'DM Sans',sans-serif",color:"#9b5070",fontSize:".97rem",marginBottom:"1.75rem",lineHeight:1.72}}>
              We will confirm your booking via WhatsApp or call within 24 hours.<br/>
              <strong style={{color:"#be185d"}}>Beauty Town Makeup Studio</strong> · Etawah, Uttar Pradesh
            </p>
            <button onClick={()=>setOk(false)} style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,padding:".8rem 2.2rem",borderRadius:"50px",background:"linear-gradient(135deg,#be185d,#f472b6)",color:"#fff",border:"none",cursor:"pointer"}}>Book Another</button>
          </motion.div>
        ) : (
          <motion.form initial={{opacity:0,y:38}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}}
            onSubmit={e=>{e.preventDefault();setOk(true);}}
            style={{background:"rgba(255,255,255,.78)",backdropFilter:"blur(26px)",border:"1px solid rgba(236,72,153,.17)",borderRadius:"30px",padding:"clamp(1.5rem,4vw,3rem)",boxShadow:"0 22px 65px rgba(236,72,153,.11)"}}>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(215px,1fr))",gap:"1.1rem",marginBottom:"1.1rem"}}>
              {[{k:"name",l:"Full Name",t:"text",p:"Your full name",r:true},
                {k:"phone",l:"Phone / WhatsApp",t:"tel",p:"08586882574",r:true},
                {k:"email",l:"Email",t:"email",p:"you@email.com",r:false},
                {k:"date",l:"Preferred Date",t:"date",p:"",r:true},
                {k:"time",l:"Preferred Time",t:"time",p:"",r:true}]
                .map(({k,l,t,p,r})=>(
                  <div key={k}>
                    <label style={{fontFamily:"'DM Sans',sans-serif",fontSize:".78rem",fontWeight:700,color:"#6b1a3a",display:"block",marginBottom:".4rem",letterSpacing:".05em"}}>
                      {l} {r&&<span style={{color:"#be185d"}}>*</span>}
                    </label>
                    <input type={t} placeholder={p} required={r} value={form[k as keyof typeof form]} onChange={e=>h(k,e.target.value)}
                      style={iS}
                      onFocus={e=>e.target.style.borderColor="#be185d"}
                      onBlur={e=>e.target.style.borderColor="rgba(236,72,153,.2)"}/>
                  </div>
                ))}
              <div>
                <label style={{fontFamily:"'DM Sans',sans-serif",fontSize:".78rem",fontWeight:700,color:"#6b1a3a",display:"block",marginBottom:".4rem",letterSpacing:".05em"}}>
                  Service <span style={{color:"#be185d"}}>*</span>
                </label>
                <select required value={form.service} onChange={e=>h("service",e.target.value)}
                  style={{...iS,color:form.service?"#200c18":"#9b5070",cursor:"pointer"}}
                  onFocus={e=>e.currentTarget.style.borderColor="#be185d"}
                  onBlur={e=>e.currentTarget.style.borderColor="rgba(236,72,153,.2)"}>
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map(s=><option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
            </div>
            <div style={{marginBottom:"1.6rem"}}>
              <label style={{fontFamily:"'DM Sans',sans-serif",fontSize:".78rem",fontWeight:700,color:"#6b1a3a",display:"block",marginBottom:".4rem",letterSpacing:".05em"}}>Special Requests / Notes</label>
              <textarea rows={3} placeholder="Venue details, references, any special requests..."
                value={form.notes} onChange={e=>h("notes",e.target.value)}
                style={{...iS,resize:"vertical"}}
                onFocus={e=>e.target.style.borderColor="#be185d"}
                onBlur={e=>e.target.style.borderColor="rgba(236,72,153,.2)"}/>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
              <motion.button whileHover={{scale:1.05,boxShadow:"0 14px 42px rgba(190,24,93,.5)"}} whileTap={{scale:.97}}
                type="submit"
                style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".98rem",letterSpacing:".07em",
                  padding:"1rem 3rem",borderRadius:"50px",border:"none",
                  background:"linear-gradient(135deg,#be185d,#e8437a,#f472b6)",color:"#fff",cursor:"pointer",
                  boxShadow:"0 6px 28px rgba(190,24,93,.36)",display:"flex",alignItems:"center",gap:".55rem"}}>
                <Calendar size={16}/> Confirm Appointment
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   CTA BANNER
────────────────────────────────────────────────────────── */
function CTABanner() {
  return (
    <section style={{padding:"80px 1.5rem",position:"relative",zIndex:1}}>
      <motion.div initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.75}}
        style={{maxWidth:1080,margin:"0 auto",textAlign:"center",
          background:"linear-gradient(135deg,#be185d 0%,#e8437a 45%,#f472b6 100%)",
          borderRadius:"34px",padding:"clamp(2.8rem,5vw,5rem) clamp(1.5rem,4vw,3.5rem)",
          position:"relative",overflow:"hidden",boxShadow:"0 36px 95px rgba(190,24,93,.38)"}}>
        {/* inner orbs */}
        <div style={{position:"absolute",width:340,height:340,borderRadius:"50%",background:"rgba(255,255,255,.09)",top:-105,right:-75,filter:"blur(55px)"}}/>
        <div style={{position:"absolute",width:240,height:240,borderRadius:"50%",background:"rgba(255,255,255,.07)",bottom:-72,left:-55,filter:"blur(45px)"}}/>
        <div style={{position:"absolute",width:160,height:160,borderRadius:"50%",background:"rgba(255,255,255,.06)",top:"40%",left:"18%",filter:"blur(35px)"}}/>

        <div style={{display:"inline-flex",alignItems:"center",gap:".5rem",
          background:"rgba(255,255,255,.18)",border:"1px solid rgba(255,255,255,.34)",
          borderRadius:"50px",padding:".35rem 1.2rem",marginBottom:"1.5rem"}}>
          <Sparkles size={14} color="rgba(255,255,255,.92)"/>
          <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:".72rem",fontWeight:700,letterSpacing:".16em",color:"rgba(255,255,255,.94)"}}>
            ETAWAH'S MOST TRUSTED BEAUTY STUDIO
          </span>
        </div>

        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.9rem,4.8vw,3.4rem)",fontWeight:800,color:"#fff",marginBottom:".95rem",lineHeight:1.16}}>
          Your Most Beautiful Day<br/>Starts Here
        </h2>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"1.06rem",color:"rgba(255,255,255,.9)",lineHeight:1.75,maxWidth:520,margin:"0 auto 2.4rem"}}>
          Don't leave your most important look to chance. Book Beauty Town Makeup Studio today and step into every occasion as the most radiant version of yourself.
        </p>
        <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
          <motion.a href="tel:08586882574" whileHover={{scale:1.06}} whileTap={{scale:.95}}
            style={{display:"flex",alignItems:"center",gap:".5rem",padding:".95rem 2.4rem",borderRadius:"50px",
              background:"#fff",color:"#be185d",fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".95rem",textDecoration:"none",boxShadow:"0 6px 28px rgba(0,0,0,.18)"}}>
            <Phone size={16}/> Call Us Now
          </motion.a>
          <motion.a href="https://wa.me/918586882574?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Beauty Town%20Makeup%20Studio!"
            target="_blank" rel="noopener noreferrer" whileHover={{scale:1.06}} whileTap={{scale:.95}}
            style={{display:"flex",alignItems:"center",gap:".5rem",padding:".95rem 2.4rem",borderRadius:"50px",
              background:"rgba(255,255,255,.18)",backdropFilter:"blur(10px)",border:"2px solid rgba(255,255,255,.62)",
              color:"#fff",fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".95rem",textDecoration:"none"}}>
            <MessageCircle size={16}/> WhatsApp Us
          </motion.a>
          <motion.button whileHover={{scale:1.06}} whileTap={{scale:.95}}
            onClick={()=>document.getElementById("book")?.scrollIntoView({behavior:"smooth"})}
            style={{display:"flex",alignItems:"center",gap:".5rem",padding:".95rem 2.4rem",borderRadius:"50px",
              background:"rgba(255,255,255,.12)",border:"2px solid rgba(255,255,255,.42)",
              color:"#fff",fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".95rem",cursor:"pointer"}}>
            <Calendar size={16}/> Book Online <ArrowRight size={14}/>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   MAP & CONTACT
────────────────────────────────────────────────────────── */
function MapContact() {
  return (
    <section style={{padding:"90px 0",position:"relative",zIndex:1}}>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem"}}>
        <Heading sub="Visit Us" title="Location & Contact" desc="Find Beauty Town Makeup Studio in Civil Lines, Etawah — or call to arrange a home bridal service anywhere in Uttar Pradesh."/>
        <div className="map-layout">
          <motion.div initial={{opacity:0,x:-38}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.62}}
            style={{display:"flex",flexDirection:"column",gap:"1.1rem"}}>
            {[
              {i:<MapPin size={17}/>,  t:"Studio Address",     c:"147/4, Civil Line, Civil Lines, Etawah, Uttar Pradesh 206001"},
              {i:<Phone size={17}/>,   t:"Phone / WhatsApp",   c:"08586882574", href:"tel:08586882574"},
              {i:<Instagram size={17}/>,t:"Instagram",          c:"@Beautytownmakeupstudioetawah", href:"https://facebook.com/Beautytownmakeupstudioetawah"},
              {i:<Clock size={17}/>,   t:"Studio Hours",       c:"Monday – Sunday: 7:00 AM – 9:00 PM\n(By Appointment Only)"},
            ].map(item=>(
              <div key={item.t} style={{display:"flex",gap:"1.1rem",background:"rgba(255,255,255,.72)",backdropFilter:"blur(18px)",
                border:"1px solid rgba(236,72,153,.11)",borderRadius:"18px",padding:"1.15rem 1.3rem",
                boxShadow:"0 4px 18px rgba(236,72,153,.06)"}}>
                <div style={{width:42,height:42,flexShrink:0,borderRadius:"12px",
                  background:"linear-gradient(135deg,rgba(190,24,93,.13),rgba(244,114,182,.08))",
                  display:"flex",alignItems:"center",justifyContent:"center",color:"#be185d"}}>{item.i}</div>
                <div>
                  <div style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".75rem",letterSpacing:".09em",color:"#be185d",marginBottom:".28rem"}}>{item.t}</div>
                  {(item as any).href
                    ? <a href={(item as any).href} target={(item as any).href.startsWith("http")?"_blank":"_self"} rel="noopener noreferrer"
                        style={{fontFamily:"'DM Sans',sans-serif",fontSize:".9rem",color:"#200c18",textDecoration:"none",fontWeight:600}}>{item.c}</a>
                    : <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:".87rem",color:"#6b2040",lineHeight:1.62,whiteSpace:"pre-line",margin:0}}>{item.c}</p>
                  }
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{opacity:0,x:38}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.62}}
            style={{borderRadius:"24px",overflow:"hidden",border:"2px solid rgba(236,72,153,.17)",boxShadow:"0 22px 65px rgba(236,72,153,.13)",minHeight:380}}>
            <iframe title="Beauty Town Makeup Studio — Etawah Uttar Pradesh"
              src="https://maps.google.com/maps?q=147%2F4%2C+Civil+Line%2C+Civil+Lines%2C+Etawah%2C+Uttar+Pradesh+206001&output=embed&z=15"
              width="100%" height="100%"
              style={{border:0,display:"block",minHeight:380}}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   FOOTER
────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{background:"linear-gradient(135deg,#200c18 0%,#100408 100%)",padding:"65px 0 28px",position:"relative",zIndex:1,overflow:"hidden"}}>
      <div style={{position:"absolute",width:420,height:420,borderRadius:"50%",background:"radial-gradient(circle,rgba(190,24,93,.14),transparent)",top:-130,right:-80,filter:"blur(68px)",pointerEvents:"none"}}/>
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 1.5rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(215px,1fr))",gap:"2.8rem",marginBottom:"2.8rem"}}>
          <div>
            <div style={{marginBottom:"1.1rem"}}>
              <div style={{fontFamily:"'Dancing Script',cursive",fontSize:"1.7rem",fontWeight:700,
                background:"linear-gradient(135deg,#f9a8d4,#ec4899)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                Beauty Town Makeup Studio
              </div>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:".58rem",letterSpacing:".22em",color:"#9b5070",fontWeight:700}}>& BEAUTY SALON · ETAWAH, UTTAR PRADESH</div>
            </div>
            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:".84rem",color:"rgba(255,255,255,.44)",lineHeight:1.8,marginBottom:"1.4rem"}}>
              Etawah's premier bridal makeup studio and beauty salon — transforming every woman into her most radiant self since 2014.
            </p>
            <div style={{display:"flex",gap:".65rem"}}>
              <a href="https://facebook.com/Beautytownmakeupstudioetawah" target="_blank" rel="noopener noreferrer"
                style={{width:37,height:37,borderRadius:"50%",background:"linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff"}}><Instagram size={15}/></a>
              <a href="https://wa.me/918586882574?text=Hi%2C%20I%20would%20like%20to%20book%20at%20Beauty Town%20Makeup%20Studio!" target="_blank" rel="noopener noreferrer"
                style={{width:37,height:37,borderRadius:"50%",background:"linear-gradient(135deg,#25D366,#128C7E)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff"}}><MessageCircle size={15}/></a>
              <a href="tel:08586882574"
                style={{width:37,height:37,borderRadius:"50%",background:"linear-gradient(135deg,#be185d,#f472b6)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff"}}><Phone size={15}/></a>
            </div>
          </div>

          <div>
            <h4 style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".76rem",letterSpacing:".16em",color:"#f9a8d4",marginBottom:"1.1rem"}}>QUICK LINKS</h4>
            {["Home","Services","Gallery","About","Reviews","Book Appointment"].map(l=>(
              <button key={l} onClick={()=>document.getElementById(l.toLowerCase().replace(" appointment",""))?.scrollIntoView({behavior:"smooth"})}
                style={{display:"block",fontFamily:"'DM Sans',sans-serif",fontSize:".83rem",color:"rgba(255,255,255,.46)",background:"none",border:"none",cursor:"pointer",padding:".26rem 0",textAlign:"left",transition:"color .2s"}}
                onMouseEnter={e=>e.currentTarget.style.color="#f9a8d4"} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,.46)"}>{l}</button>
            ))}
          </div>

          <div>
            <h4 style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".76rem",letterSpacing:".16em",color:"#f9a8d4",marginBottom:"1.1rem"}}>SERVICES</h4>
            {SERVICES.map(s=><div key={s.title} style={{fontFamily:"'DM Sans',sans-serif",fontSize:".83rem",color:"rgba(255,255,255,.46)",padding:".26rem 0"}}>{s.title}</div>)}
          </div>

          <div>
            <h4 style={{fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:".76rem",letterSpacing:".16em",color:"#f9a8d4",marginBottom:"1.1rem"}}>CONTACT</h4>
            {[{i:<Phone size={12}/>,   t:"08586882574"},
              {i:<MapPin size={12}/>,  t:"147/4, Civil Line, Civil Lines, Etawah, Uttar Pradesh 206001"},
              {i:<Clock size={12}/>,   t:"Mon–Sun: 7 AM – 9 PM"}]
              .map(({i,t})=>(
                <div key={t} style={{display:"flex",gap:".6rem",alignItems:"flex-start",marginBottom:".75rem"}}>
                  <span style={{color:"#be185d",marginTop:2,flexShrink:0}}>{i}</span>
                  <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:".82rem",color:"rgba(255,255,255,.46)",lineHeight:1.62}}>{t}</span>
                </div>
              ))}
          </div>
        </div>

        <div style={{borderTop:"1px solid rgba(236,72,153,.1)",paddingTop:"1.4rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:".6rem"}}>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:".75rem",color:"rgba(255,255,255,.28)"}}>© 2026 Beauty Town Makeup Studio. All rights reserved.</p>
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:".75rem",color:"rgba(255,255,255,.28)",display:"flex",alignItems:"center",gap:".3rem"}}>
            Crafted with <Heart size={11} style={{color:"#be185d"}}/> in Etawah, Uttar Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────────────────
   FLOATING BUTTONS
────────────────────────────────────────────────────────── */
function FloatingButtons() {
  return (
    <div style={{position:"fixed",right:"1.25rem",bottom:"1.75rem",display:"flex",flexDirection:"column",gap:".8rem",zIndex:200}}>
      <motion.a href="https://wa.me/918586882574?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Beauty Town%20Makeup%20Studio%20%26%20Beauty%20Salon!"
        target="_blank" rel="noopener noreferrer"
        whileHover={{scale:1.14}} whileTap={{scale:.93}}
        initial={{opacity:0,x:60}} animate={{opacity:1,x:0}} transition={{duration:.6,delay:1.1}}
        style={{width:54,height:54,borderRadius:"50%",background:"linear-gradient(135deg,#25D366,#128C7E)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 6px 24px rgba(37,211,102,.45)",textDecoration:"none"}}
        aria-label="WhatsApp Beauty Town Makeup Studio">
        <MessageCircle size={22}/>
      </motion.a>
      <motion.a href="https://facebook.com/Beautytownmakeupstudioetawah" target="_blank" rel="noopener noreferrer"
        whileHover={{scale:1.14}} whileTap={{scale:.93}}
        initial={{opacity:0,x:60}} animate={{opacity:1,x:0}} transition={{duration:.6,delay:1.3}}
        style={{width:54,height:54,borderRadius:"50%",background:"linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 6px 24px rgba(220,39,67,.4)",textDecoration:"none"}}
        aria-label="Instagram Beauty Town Makeup Studio">
        <Instagram size={22}/>
      </motion.a>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   GLOBAL STYLES
────────────────────────────────────────────────────────── */
const G = `
  @keyframes morphBlob {
    0%,100%{border-radius:44% 56% 64% 36%/54% 46% 64% 36%}
    33%{border-radius:64% 36% 54% 46%/44% 64% 36% 56%}
    66%{border-radius:54% 46% 36% 64%/64% 36% 64% 36%}
  }
  @keyframes morphFrame {
    0%,100%{border-radius:34% 66% 66% 34%/34% 44% 56% 66%}
    25%{border-radius:64% 36% 34% 66%/54% 64% 36% 54%}
    50%{border-radius:44% 56% 56% 44%/64% 34% 66% 36%}
    75%{border-radius:66% 34% 54% 46%/44% 66% 34% 56%}
  }
  @keyframes shimmer {
    0%{transform:translateX(-140%)}
    100%{transform:translateX(140%)}
  }
  body{font-family:'DM Sans',sans-serif;background:#fdf6f8;overflow-x:hidden}
  ::-webkit-scrollbar{width:5px}
  ::-webkit-scrollbar-track{background:rgba(190,24,93,.04)}
  ::-webkit-scrollbar-thumb{background:linear-gradient(#be185d,#f472b6);border-radius:3px}

  /* Hero */
  .hero-layout{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;min-height:calc(100vh - 72px)}
  .hero-img-wrap{position:relative;z-index:2;display:flex;justify-content:center;align-items:center}
  .hero-img-frame{position:relative;border-radius:34% 66% 66% 34%/34% 44% 56% 66%;overflow:hidden;
    width:min(420px,88vw);aspect-ratio:3/4;
    box-shadow:0 34px 90px rgba(190,24,93,.32),0 0 0 9px rgba(244,114,182,.2),0 0 0 18px rgba(190,24,93,.08);
    animation:morphFrame 11s ease-in-out infinite;z-index:1}
  @media(max-width:768px){
    .hero-layout{grid-template-columns:1fr;gap:1.8rem;padding-top:.5rem;padding-bottom:2.5rem}
    .hero-img-wrap{order:-1;width:100%}
    .hero-img-frame{width:min(310px,86vw);aspect-ratio:3/4;border-radius:22px;animation:none;box-shadow:0 18px 55px rgba(190,24,93,.28)}
    .hero-img-wrap>div:not(.hero-img-frame){display:none}
  }

  /* Nav visibility */
  .desktop-nav{display:flex!important}
  .mobile-menu-btn{display:none!important}
  @media(max-width:768px){
    .desktop-nav{display:none!important}
    .mobile-menu-btn{display:flex!important}
  }

  /* Gallery */
  .gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:248px;gap:.95rem}
  @media(max-width:768px){
    .gallery-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:208px}
    .gallery-grid>div{grid-row:span 1!important}
  }
  @media(max-width:480px){.gallery-grid{grid-template-columns:1fr;grid-auto-rows:268px}}

  /* Map */
  .map-layout{display:grid;grid-template-columns:1fr 1fr;gap:2.2rem;align-items:start}
  @media(max-width:768px){.map-layout{grid-template-columns:1fr}}
`;

/* ──────────────────────────────────────────────────────────
   APP ROOT
────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <style>{G}</style>
      <div style={{position:"relative",minHeight:"100vh",background:"#fdf6f8"}}>
        <FloatingBalls/>
        <Navbar/>
        <main style={{position:"relative",zIndex:1}}>
          <Hero/>
          <Services/>
          <WhyUs/>
          <Gallery/>
          <Reviews/>
          <Awards/>
          <MetricsSection/>
          <PressSection/>
          <CTABanner/>
          <Appointment/>
          <MapContact/>
        </main>
        <Footer/>
        <FloatingButtons/>
      </div>
    </>
  );
}

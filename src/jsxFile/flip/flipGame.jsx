
import "../../cssFile/flip-css/flipGame.css";
import { useState, useMemo } from "react";
import Card from "./crd"



export default function flipgame({ lvl, setPrt, setShowit }) {
    let pairCount;
    if (lvl === 1) {
        pairCount = 10;
    } else if (lvl === 2) {
        pairCount = 14;
    } else {
        pairCount = 20;
    }
    const [act, setAct] = useState({ clk: 0, ttl: pairCount / 2, myttl: 0 });
    const [flip, setFlip] = useState({ crd1: -1, crd2: -1, wrong: 0 });
    const [matched, setMatched] = useState([]);
    const flipSound = new Audio("/sound/flip.mp3");
    const pop = new Audio("/sound/pop.mp3")
    const wrong = new Audio("/sound/wrong.mp3")
    const win = new Audio("/sound/win.wav")

    let crds = [
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902841/vec11_t9lf0k.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902841/vec11_t9lf0k.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902845/vec12_mtgqmr.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902845/vec12_mtgqmr.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902848/vec13_zjrxsf.svg",

        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902848/vec13_zjrxsf.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902852/vec14_oeqysl.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902852/vec14_oeqysl.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902856/vec15_i63y8p.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902856/vec15_i63y8p.svg",

        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902859/vec16_lsptqd.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902859/vec16_lsptqd.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902863/vec17_vodu9u.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902863/vec17_vodu9u.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902866/vec18_usawcr.svg",

        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902866/vec18_usawcr.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902869/vec19_zvbnxt.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902869/vec19_zvbnxt.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902873/vec20_jhbyhq.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902873/vec20_jhbyhq.svg",
    ]
    let crd2s = [
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902792/vec1_tzthtj.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902792/vec1_tzthtj.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902799/vec2_yqg4c6.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902799/vec2_yqg4c6.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902803/vec3_zmwecx.svg",

        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902803/vec3_zmwecx.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902808/vec4_sbhxox.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902808/vec4_sbhxox.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902811/vec5_rjskdi.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902811/vec5_rjskdi.svg",

        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902814/vec6_p7sju2.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902814/vec6_p7sju2.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902818/vec7_lrqlxs.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902818/vec7_lrqlxs.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902822/vec8_jn5cwe.svg",

        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902822/vec8_jn5cwe.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902825/vec9_uiy3gz.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902825/vec9_uiy3gz.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902829/vec10_yifkdt.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902829/vec10_yifkdt.svg",
    ]
    let foods = [
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901936/fud5_ucmddp.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901936/fud5_ucmddp.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901932/fud4_vxxzm4.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901932/fud4_vxxzm4.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901930/fud3_txila5.svg",

        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901930/fud3_txila5.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901925/fud2_nxjctj.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901925/fud2_nxjctj.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901921/fud1_tk7ova.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901921/fud1_tk7ova.svg",


        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902192/fud6_gkjd7u.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902192/fud6_gkjd7u.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902200/fud7_gjnnxt.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902200/fud7_gjnnxt.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902206/fud8_flj2uk.svg",

        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902206/fud8_flj2uk.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902210/fud9_oqwfup.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902210/fud9_oqwfup.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902213/fud10_i50fgf.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754902213/fud10_i50fgf.svg",
    ]

    let links = [
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894158/ani10_egutuu.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894158/ani10_egutuu.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894155/ani9_ccys7a.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894155/ani9_ccys7a.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894151/ani8_rowihz.svg",

        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894151/ani8_rowihz.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894118/ani7_hsp4tn.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894118/ani7_hsp4tn.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894115/ani6_plkrbl.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894115/ani6_plkrbl.svg",

        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901411/ani4_hcym7h.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754901411/ani4_hcym7h.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894104/ani4_fjx6ue.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894104/ani4_fjx6ue.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894101/ani3_xdbmf7.svg",

        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894101/ani3_xdbmf7.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894089/ani1_xgwxp5.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894089/ani1_xgwxp5.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894092/ani2_aff2ig.svg",
        "https://res.cloudinary.com/dwqigzdpw/image/upload/v1754894092/ani2_aff2ig.svg",
    ];


    const rnd = Math.floor(Math.random() * 4);
    const finalLinks =
        rnd === 0
            ? links.slice(0, pairCount).flat()
            : rnd === 1
                ? foods.slice(0, pairCount).flat()
                : rnd === 2
                    ? crds.slice(0, pairCount).flat()
                    : crd2s.slice(0, pairCount).flat();

    // Shuffle cards
    function shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    const shuffledLinks = useMemo(() => {
        return shuffleArray(finalLinks);
    }, []);

    const clickCheck = (i) => {
        // Prevent clicking when two cards are already flipped
        if (flip.crd1 !== -1 && flip.crd2 !== -1) return;

        // First card flip
        if (flip.crd1 === -1) {
            flipSound.currentTime = 0;
            flipSound.play();
            setFlip((prev) => ({ ...prev, crd1: i }));
            return;
        }

        // Second card flip (must be different from first)
        if (flip.crd2 === -1 && i !== flip.crd1) {
            flipSound.currentTime = 0;
            flipSound.play();
            const firstCardIndex = flip.crd1;
            setFlip((prev) => ({ ...prev, crd2: i }));

            setTimeout(() => {
                // If cards don't match
                if (shuffledLinks[firstCardIndex] !== shuffledLinks[i]) {
                    wrong.currentTime = 0;
                    wrong.play();
                    setFlip((prev) => ({
                        ...prev,
                        wrong: prev.wrong + 1,
                        crd1: -1,
                        crd2: -1,
                    }));
                } else {
                    // Cards match
                    pop.currentTime = 0;
                    pop.play();
                    setMatched((prev) => [...prev, firstCardIndex, i]);

                    setAct((prev) => {
                        const updatedMyttl = prev.myttl + 1;
                        const isGameComplete = updatedMyttl === prev.ttl;

                        if (isGameComplete) {
                            win.currentTime = 0;
                            win.play();
                            setPrt((pre) => ({ ...pre, page: 1 }));
                            setShowit((pre) => ({
                                ...pre,
                                is: true,
                                ...(flip.wrong <= prev.ttl / 3
                                    ? {
                                        msg: "Legendary!",
                                        msg2: "Amazing! You played like a pro with almost no mistakes!",
                                    }
                                    : flip.wrong <= (prev.ttl * 2) / 3
                                        ? {
                                            msg: "Outstanding!",
                                            msg2: "Great job! Only a few slips—keep going!",
                                        }
                                        : {
                                            msg: "Keep Going!",
                                            msg2: "Nice try! Practice a bit more, you'll get there!",
                                        }),
                                btn: "Play Again",
                            }));

                        }

                        return { ...prev, myttl: updatedMyttl };
                    });

                    setFlip((prev) => ({ ...prev, crd1: -1, crd2: -1 }));
                }
            }, 1000);
        }
    };



    return (
        <div className="flipgame">
            <div className="topx">
                <svg onClick={() => setPrt((pre) => ({ ...pre, page: 1 }))} viewBox="-19.04 0 75.803 75.803" fill="#f90000ff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)">
                            <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#ffffffff">
                            </path>
                        </g>
                    </g>
                </svg>
                <b>{act.myttl + " - " + act.ttl}</b>
            </div>
            <div className="crdprt">
                {shuffledLinks.map((link, i) => {
                    if (matched.includes(i)) return null;
                    return (
                        <Card
                            key={i}
                            link={link}
                            onClick={() => clickCheck(i)}
                            className={`crd ${flip.crd1 === i || flip.crd2 === i ? "clickflip" : ""
                                }`}
                        />
                    );
                })}

            </div>
        </div>
    );
}

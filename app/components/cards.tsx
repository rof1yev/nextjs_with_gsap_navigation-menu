"use client";

import { FC, useRef } from "react";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type CARD_TYPE = {
  title: string;
  image: string;
  bgColor?: string;
};

const Card = ({
  title,
  bgColor,

  image,
  index,
}: {
  title: string;

  image: string;
  bgColor?: string;
  index: number;
}) => {
  return (
    <div className="card relative" id={`card-${index}`}>
      <div
        className="card-inner relative will-change-transform py-4 px-16 flex gap-8"
        style={{ background: bgColor }}
      >
        <div className="card-content flex-[3] flex flex-col justify-between">
          <h1 className="text-4xl text-bold mix-blend-difference">{title}</h1>
          <p className="italic mix-blend-difference">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, fugit. Fugit modi deserunt iure, itaque exercitationem
            accusantium, commodi quo dolorum mollitia qui velit consequuntur
            alias beatae. Necessitatibus rem, voluptatem atque eum ex veritatis
            at earum, quaerat in magni nemo dolorum. Quo in pariatur est dolorem
            nulla quidem rerum deleniti culpa recusandae, voluptate accusantium
            autem ex deserunt!
          </p>
        </div>
        <div className="card-img aspect-video flex-[1] rounded overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={350}
            height={240}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const cards: CARD_TYPE[] = [
    {
      title: "Brand Foundation",
      image: "/image-1.jpeg",
      bgColor: "#c3abff",
    },
    {
      title: "Design Identity",
      image: "/image-2.jpg",
      bgColor: "#fed35b",
    },
    {
      title: "Development",
      image: "/image-3.jpeg",
      bgColor: "#1e1e1e",
    },
    {
      title: "Brand Foundation",
      image: "/image-1.jpeg",
      bgColor: "#c3abff",
    },
    {
      title: "Design Identity",
      image: "/image-2.jpg",
      bgColor: "#fed35b",
    },
  ];

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".card", container.current);

      ScrollTrigger.create({
        trigger: cards[0],
        start: "top 15%",
        endTrigger: cards[cards.length - 1],
        end: "top 35%",
        pin: ".intro",
        pinSpacing: false,
      });

      cards.forEach((card, index) => {
        const isLastCard: boolean = index === cards.length - 1;
        const cardInner = card.querySelector(".card-inner");

        if (!isLastCard) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 65%",
            pin: true,
            pinSpacing: false,
          });
        }

        gsap.to(cardInner, {
          y: `-${(cards.length - index) * 14}vh`,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 55%",
            scrub: true,
          },
        });
      });

      return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="app" ref={container}>
        <div className="intro w-full"></div>
        <div className="cards">
          {cards.map((item: CARD_TYPE, index: number) => (
            <Card key={index} {...item} index={index} />
          ))}
        </div>
        <div className="outro mt-10">
          <p className="px-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            voluptates! Veritatis, magnam quisquam. Soluta corporis quaerat
            aspernatur sapiente maiores animi quo praesentium debitis fugiat
            corrupti. Voluptatum officiis explicabo debitis quo ut incidunt
            suscipit cumque earum omnis aperiam quibusdam excepturi repudiandae
            in sapiente autem delectus pariatur, ipsam quas alias dolore quia
            ratione. Nisi rerum nobis facere nostrum? Consequatur blanditiis
            quidem, earum animi enim distinctio dolorem quae corporis pariatur
            architecto! Explicabo maxime omnis consectetur vel voluptas
            quibusdam quisquam consequatur eum expedita molestiae perferendis,
            exercitationem sint quam fugit distinctio provident? Suscipit a
            adipisci eaque aliquid neque porro magni labore ex totam,
            consequatur repudiandae incidunt dolorum, quibusdam quia omnis quod
            eveniet dicta eum debitis. Vero officiis modi aliquid quam
            aspernatur quibusdam nobis assumenda autem, iusto adipisci rerum
            magni illum dolorem voluptate aut. Vitae enim eum quo aliquid
            voluptatum, quis architecto! Sint maxime asperiores iusto ex
            voluptatem ab, sed autem at, quod repellat laboriosam dolore tempore
            porro incidunt debitis unde. Praesentium sit fugit ipsum
            necessitatibus expedita asperiores at voluptatem nulla aperiam magni
            in, distinctio inventore aliquid adipisci voluptate cum, vitae
            libero nisi, rem eveniet beatae! Aliquid maxime harum rem
            voluptatibus molestias natus fugit cum perspiciatis veritatis quasi
            sapiente nisi officiis recusandae repudiandae nesciunt quaerat omnis
            maiores, laborum facilis ad. Necessitatibus, ea cumque, odit neque
            praesentium maiores ad suscipit aperiam dolorem excepturi, sit
            officiis? Quisquam, quas iusto? Suscipit, aperiam sunt! Quod soluta,
            voluptates nisi exercitationem est laboriosam enim eius ullam
            placeat velit optio blanditiis adipisci nostrum tenetur minus
            quibusdam modi ex dolor laborum? Molestias alias obcaecati, maiores
            consequatur atque mollitia sint excepturi hic, quo nobis
            necessitatibus aspernatur repellendus aut corporis similique illum
            odio magnam doloribus sunt iste impedit facilis! Quasi libero
            necessitatibus, magni perspiciatis, laborum velit ratione autem quod
            labore unde facilis deserunt, voluptatem nostrum! Placeat doloremque
            officiis eius sit corporis fugiat fuga culpa harum aliquid assumenda
            tempora velit suscipit voluptates dolorum temporibus facere,
            pariatur facilis excepturi odio minus. Iure eum, recusandae harum
            fugiat eos accusantium non sequi porro repudiandae aliquid, nemo
            doloremque vel numquam inventore fuga architecto quisquam
            perferendis quod magnam, asperiores iusto minima fugit eaque?
            Perspiciatis necessitatibus deleniti repudiandae enim ducimus
            aliquid esse consequatur ea minima officiis, amet quasi voluptates
            temporibus atque provident id illum quaerat aliquam laboriosam minus
            maiores doloremque ratione! Nam, deleniti velit porro cupiditate
            nihil sit quod, doloribus exercitationem animi, nostrum ad quam
            iusto aliquid debitis. Corporis unde laudantium alias, sapiente
            optio, ex commodi voluptatibus quae consequuntur libero dolor velit
            obcaecati amet. Omnis vero error voluptatem quam minus. Laboriosam,
            quidem similique? Quia esse perferendis dicta incidunt ipsam atque
            sapiente obcaecati ab! Adipisci, sit? Odit molestiae accusamus id
            qui. Illum numquam, minima nesciunt rem aperiam, nulla impedit culpa
            quam obcaecati dicta itaque earum ut facere tenetur id sint harum!
            Error expedita ullam quidem iste nam omnis labore exercitationem
            officia, nulla fuga aliquid sunt pariatur vero distinctio?
            Necessitatibus aspernatur neque excepturi ut quia, commodi unde
            deserunt reprehenderit repellat ab sed quo totam laudantium tenetur
            similique? Non necessitatibus debitis fugit dicta consequatur quae.
            Laboriosam nemo fugiat, rerum amet reiciendis consequuntur quia
            saepe odio eius sit soluta illum quo distinctio maiores fuga nisi
            dolores. Iusto corrupti architecto quos, et repudiandae omnis odio!
            Consectetur consequuntur asperiores, facilis quidem ipsam atque
            doloremque commodi impedit! Delectus autem perspiciatis qui
            veritatis fuga nemo molestias blanditiis impedit explicabo possimus,
            repellat ullam, iste tenetur accusantium officiis sunt est. Velit
            quibusdam non enim necessitatibus eum magnam vero praesentium harum
            animi, dignissimos odio molestiae consequuntur tempora rerum,
            numquam sit accusantium iusto? Velit voluptatibus eos quibusdam
            alias consequuntur ullam ea blanditiis doloremque, ad itaque
            veritatis nulla placeat repellendus animi deserunt, voluptatem vel
            praesentium eveniet natus. Atque corrupti a voluptates aperiam!
            Quisquam eaque accusamus at quaerat rem earum officiis iste
            voluptates dolores, cum assumenda amet non hic ad architecto? Ex,
            incidunt ipsam vero, obcaecati omnis alias doloremque suscipit
            eveniet unde laboriosam cupiditate quae fugiat asperiores dolor,
            cumque aliquid aperiam? Porro magnam accusantium corrupti itaque
            reiciendis veritatis? Quia nesciunt sunt illum minus quaerat et,
            tempora maiores inventore? Harum deserunt, exercitationem soluta
            aniet dicta voluptatum consectetur, natus placeat. Earum nisi ex,
            unde et debitis sed perspiciatis odio facere recusandae nemo quia
            laboriosam minus error fuga ullam, excepturi tempora provident,
            temporibus doloribus dolore commodi aspernatur? Vel odio
            reprehenderit ratione, optio rerum alias perspiciatis nam esse sunt
            atque unde? Repellendus adipisci fuga explicabo blanditiis quibusdam
            quam.
          </p>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Cards;

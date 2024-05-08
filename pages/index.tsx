import Layout from "@components/layout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image, { StaticImageData } from "next/image";
import JOHN from "public/static/images/dynamic/gallery/2022_MRI-Robot.jpg";
import MemberSaw2 from "public/static/images/dynamic/gallery/2022_Members-Using-A-Saw-2.jpg";
import BrainStorm from "public/static/images/dynamic/gallery/2023_Kickoff-Brainstorming.jpg";
import styles from "styles/pages/Home.module.scss";

function CarouselElement({
  src,
  alt = "Team 3407 Picture",
  description,
}: {
  src: StaticImageData;
  alt?: string;
  description?: string;
}) {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerOverlay}>
        <h1>Mounds View Robotics</h1>
        <h2>Team 3407</h2>
      </div>
      <Image src={src} alt={alt} className={styles.banner} priority />
    </div>
  );
}

function Banner() {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={5000}>
        <CarouselElement src={JOHN} />
        <CarouselElement src={MemberSaw2} />
        <CarouselElement src={BrainStorm} />
      </Carousel>
    </div>
  );
}

function Home() {
  return (
    <Layout title="Home" ignoreStandardContentStyle>
      <Banner />
      <div className={styles.informationContainer}>
        <h1>Who We Are</h1>
        <p className={styles.intro}>
          We are the Mounds View High School&apos;s Robotics team, Team 3407 aka
          the Wild Cards. Every year we compete in the{" "}
          <a href="https://www.firstinspires.org/about/vision-and-mission">
            FIRST
          </a>{" "}
          Robotics Competition, our team is given 6 weeks to design, prototype,
          build, test, and perfect a robot to complete the tasks required in the
          competition, we then bring our robot to the University of
          Minnesota&apos;s Williams Arena in Minneapolis Minnesota to compete
          against other teams in the FRC 10,000 Lakes Competition.
        </p>
        <p className={styles.intro}>
          We strive to teach our students skills that will not only help our
          team and robot but also help them develop skills such as programming,
          leadership, wiring, building, how to work in a team, how to work
          through problems, and an endless list of other skills that help them
          succeed in their future STEM or even non-STEM endeavors. We also work
          to encourage others to advance their knowledge of STEM fields and help
          spark the interest of the next generation of students, teachers, and
          ultimately leaders.
        </p>
      </div>
      <div className={styles.announcements}>
        <h1>Announcements</h1>
        <h2>This Years Challenge:</h2>
        <div className={styles.challenge}>
          <a
            href="https://www.firstinspires.org/robotics/frc/game-and-season"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src="data:image/png;base64,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"
              alt="Crescendo Logo"
              width={315}
              height={315}
            />
          </a>
          <iframe
            className={styles.ytEmbed}
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/9keeDyFxzY4?si=WdQ0sSxcMbuG9kv6"
            title="2024 FIRST Robotics Competition CRESCENDO presented by Haas Game Animation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <h1>Next Competition</h1>
        <p>
          <a href="https://frc-events.firstinspires.org/2024/MNMI">
            {" "}
            Minnesota 10,000 Lakes Regional
          </a>{" "}
          on Thursday, April 4 to Saturday, April 6, 2024 at{" "}
          <a href="https://www.google.com/maps?q=1925+University+Ave+SE,+Minneapolis,+MN,+USA">
            Williams Arena/The Sports Pavilion Univ of MN
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}

export default Home;

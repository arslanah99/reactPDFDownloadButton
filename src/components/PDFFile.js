import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import LebronStretch from "../photos/lebron_transparent.png";
import { Font } from '@react-pdf/renderer';
import MyCustomFont from '../fonts/Anton-Regular.ttf'

Font.register({
  family: 'MyFont', 
  src: MyCustomFont,
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "MyFont",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "MyFont",
    },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    fontFamily: "MyFont",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Image style={styles.image} src={LebronStretch} />
        <Text style={styles.text}>
          Oh right. I forgot about the battle. Wow, you got that off the
          Internet? In my day, the Internet was only used to download
          pornography. I don't know what you did, Fry, but once again, you
          screwed up! Now all the planets are gonna start cracking wise about
          our mamas. She also liked to shut up! We'll go deliver this crate like
          professionals, and then we'll go home. In your time, yes, but nowadays
          shut up! Besides, these are adult stemcells, harvested from perfectly
          healthy adults whom I killed for their stemcells. And I'm his friend
          Jesus. Incidentally, you have a dime up your nose. Oh, you're a dollar
          naughtier than most. Bender, being God isn't easy. If you do too much,
          people get dependent on you, and if you do nothing, they lose hope.
          You have to use a light touch. Like a safecracker, or a pickpocket.
          And why did 'I' have to take a cab? Perhaps, but perhaps your
          civilization is merely the sewer of an even greater society above you!
          Why would a robot need to drink? Stop! Don't shoot fire stick in space
          canoe! Cause explosive decompression! I'm sure those windmills will
          keep them cool. No! I want to live! There are still too many things I
          don't own! Now that the, uh, garbage ball is in space, Doctor, perhaps
          you can help me with my sexual inhibitions? I feel like I was mauled
          by Jesus. Anyhoo, your net-suits will allow you to experience Fry's
          worm infested bowels as if you were actually wriggling through them.
          Bender, I didn't know you liked cooking. That's so cute. Who am I
          making this out to? Aww, it's true. I've been hiding it for so long.
          Are you crazy? I can't swallow that. Bite my shiny metal ass. Leela's
          gonna kill me. You know, I was God once. There, now he's trapped in a
          book I wrote: a crummy world of plot holes and spelling errors! Yes!
          In your face, Gandhi! This is the worst kind of discrimination: the
          kind against me! No, I'm Santa Claus! You are the last hope of the
          universe. I am the man with no name, Zapp Brannigan! Why would I want
          to know that? I guess if you want children beaten, you have to do it
          yourself. Oh, I think we should just stay friends. No, just a regular
          mistake. I'm Santa Claus! And then the battle's not so bad? I daresay
          that Fry has discovered the smelliest object in the known universe!
          No! The kind with looting and maybe starting a few fires! Bender, quit
          destroying the universe! So, how 'bout them Knicks? Yes! In your face,
          Gandhi! For one beautiful night I knew what it was like to be a
          grandmother. Subjugated, yet honored. Bite my shiny metal ass. You
          know the worst thing about being a slave? They make you work, but they
          don't pay you or let you go. There's no part of that sentence I didn't
          like! And when we woke up, we had these bodies. Oh sure! Blame the
          wizards! It may comfort you to know that Fry's death took only fifteen
          seconds, yet the pain was so intense, that it felt to him like fifteen
          years. And it goes without saying, it caused him to empty his bowels.
          You guys aren't Santa! You're not even robots. How dare you lie in
          front of Jesus? Hey, whatcha watching? No, I'm Santa Claus! If rubbin'
          frozen dirt in your crotch is wrong, hey I don't wanna be right. Oh,
          you're a dollar naughtier than most. Then we'll go with that data
          file! Fry, we have a crate to deliver. And why did 'I' have to take a
          cab? I guess if you want children beaten, you have to do it yourself.
          Say it in Russian! Anyhoo, your net-suits will allow you to experience
          Fry's worm infested bowels as if you were actually wriggling through
          them. And I'm his friend Jesus. Now what? Your best is an idiot! Quite
          possible. We live long and are celebrated poopers. Switzerland is
          small and neutral! We are more like Germany, ambitious and
          misunderstood! I guess because my parents keep telling me to be more
          ladylike. As though! You know the worst thing about being a slave?
          They make you work, but they don't pay you or let you go.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;

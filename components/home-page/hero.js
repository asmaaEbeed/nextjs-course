import Image from 'next/image';

import classes from './hero.module.css';

function Hero(){
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/shopping.jpg" alt="main profile image" width={350} height={300}/>
            </div>
            <h1>It&apos;s Fashion Time</h1>
            <p>Blog. Global Woman Style We guide you to grow! See photos posted to Fashion Time by other people</p>
        </section>
    )
}
export default Hero;
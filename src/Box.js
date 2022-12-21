import logo from './images/logo.svg'
import mockups from './images/image-mockups.png'
import online from './images/icon-online.svg'
import budgeting from './images/icon-budgeting.svg'
import onboarding from './images/icon-onboarding.svg'
import api from './images/icon-api.svg'
import currency from './images/image-currency.jpg'
import restaurant from './images/image-restaurant.jpg'
import plane from './images/image-plane.jpg'
import confetti from './images/image-confetti.jpg'
import facebook from './images/icon-facebook.svg'
import youtube from './images/icon-youtube.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import instagram from './images/icon-instagram.svg'
import Nav from './Nav'


const Box=()=>{
    return (
        <div>
            <Nav/>
            
            <div className='first-main'>
                <div className='box1'>
                    <p className='font-lg'>Next generation digital banking</p>
                    <p>
                        Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <p className='button-gr'>Request Invite</p>
                </div>
                <div className='box2'>
                   <img src={mockups} alt=""/>
                </div>
            </div>

            <div className='pad f-pad'>
                <div className='easy'>
                    <p className='font-md'>Why choose Easybank?</p>
                    <p>
                        We leverage Open Banking to turn your bank account into your financial hub. Control 
                        your finances like never before.
                    </p>
                </div>
                <div className='grid'>
                    <div className='div'>
                        <img src={online} alt=""/>
                        <p>Online Banking</p>
                        <p>
                            Our modern web and mobile applications allow you to keep track of your finances 
                            wherever you are in the world.
                        </p>
                    </div>
                    <div className='div'>
                        <img src={budgeting} alt=""/>
                        <p>Simple Budgeting</p>
                        <p>
                            See exactly where your money goes each month. Receive notifications when you’re 
                            close to hitting your limits.
                        </p>
                    </div>
                    <div className='div'>
                        <img src={onboarding} alt=""/>
                        <p>Fast Onboarding</p>
                        <p>
                            We don’t do branches. Open your account in minutes online and start taking control 
                            of your finances right away.
                        </p>
                    </div>
                    <div className='div'>
                        <img src={api} alt/>
                        <p>Open API</p>
                        <p>
                            Manage your savings, investments, pension, and much more from one account. Tracking 
                            your money has never been easier.
                        </p>
                    </div>
                </div>
            </div>

            <div className='pad s-pad'>
                <div className='font-md latest'>Latest Articles</div>
                <div className='grid'>
                    <div>
                        <img className="img pic" src={currency} alt=""/>
                        <div className='part'>
                            <p>By Claire Robinson</p>
                            <p>Receive money in any currency with no fees</p>
                            <p>
                                The world is getting smaller and we’re becoming more mobile. So why should you be 
                                forced to only receive money in a single …
                            </p>
                        </div>
                    </div>
                    <div>
                        <img className="img pic" src={restaurant} alt=""/>
                        <div className='part'>
                            <p>By Wilson Hutton</p>
                            <p>Treat yourself without worrying about money</p>
                            <p>
                                Our simple budgeting feature allows you to separate out your spending and set 
                                realistic limits each month. That means you …
                            </p>
                        </div>
                    </div>
                    <div>
                        <img className="img pic" src={plane} alt=""/>
                        <div className='part'>
                            <p>By Wilson Hutton</p>
                            <p>Take your Easybank card wherever you go</p>
                            <p>
                                We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                                while you’re abroad. We’ll even show you …
                            </p>
                        </div>
                    </div>
                    <div>
                        <img className="img pic" src={confetti} alt=""/>
                        <div className='part'>
                            <p>By Claire Robinson</p>
                            <p> Our invite-only Beta accounts are now live!</p>
                            <p>
                                After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                                It’s easy to request an invite through the site ...
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className='footer-box1'> 
                    <div className='footer-icons-box'>
                        <div className='center'><img className='whi' src={logo} alt/></div>
                        <div>
                            <img className='icon-space' src={facebook} alt=""/>
                            <img  className='icon-space'  src={youtube} alt=""/>
                            <img  className='icon-space'  src={twitter} alt=""/>
                            <img  className='icon-space'  src={pinterest} alt=""/>
                            <img  className='icon-space'  src={instagram} alt=""/>
                        </div>
                    </div>
                    <div className='align'>
                        <p>About Us</p>
                        <p>Contact</p>
                        <p>Blog</p>
                        </div>
                    <div className='align'>
                        <p>Careers</p>
                        <p>Support</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className='footer-box2'>
                    <p className='request'>Request Invite</p>
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}
export default Box
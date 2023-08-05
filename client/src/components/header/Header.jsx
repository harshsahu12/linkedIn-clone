import './Header.scss'
import { ArticleOutlined, BusinessCenter, People, SmartDisplayOutlined } from '@mui/icons-material'

const Header = ({ handleFunction }) => {
    return (
        <div className='header'>
            <div className="header_container">
                <div className="linkedin_logo">
                    Linked<img src="assets/logo.svg" alt="" />
                </div>
                <div className="right_section">
                    <div className="icons">
                        <div className='icon'>
                            <ArticleOutlined style={{ fontSize: '28px' }} />
                            Articles
                        </div>
                        <div className='icon'>
                            <People style={{ fontSize: '28px' }} />
                            People
                        </div>
                        <div className='icon'>
                            <SmartDisplayOutlined style={{ fontSize: '28px' }} />
                            Learning
                        </div>
                        <div className='icon'>
                            <BusinessCenter style={{ fontSize: '28px' }} />
                            Jobs
                        </div>
                    </div>
                    <hr />
                    <div className="login_buttons">
                        <button type='submit' onClick={handleFunction}>
                            Join now
                        </button>
                        <button type='submit' onClick={handleFunction}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
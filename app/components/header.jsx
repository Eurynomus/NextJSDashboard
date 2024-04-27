import Link from 'next/link';

export default async function Header() {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <Link href='/' className='home-button'>Home</Link>
                <div>
                    <div>
                        <Link href='/sign-up' className='signup-button'>Sign up</Link>
                        <Link href='/sign-in' className='signin-button'>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
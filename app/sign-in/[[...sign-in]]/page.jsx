import { SignIn } from '@clerk/nextjs';

export default function Page() {
    return (
        <>
            <div className="signin-page-title">This is the signin page</div>
            <SignIn />
        </>
    );
}
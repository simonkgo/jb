import "./Layout.css";

export const LayoutComponent = () => {
    return(
        <div className="Layout">
            <header className="header">
                <h1>Online Bank</h1>
            </header>

            <aside>
                <div className="menu">

                </div>
            </aside>

            <main>
                main page;
            </main>

            <footer>
                <div className="copyrights">
                    <p>All Rights Reserved &copy;</p>
                </div>
            </footer>
        </div>
    )
};
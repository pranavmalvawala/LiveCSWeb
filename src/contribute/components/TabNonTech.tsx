import React from "react";

export const TabNonTech: React.FC = () => {
    return (
        <div className="contributeTab">
            <h3>Non-Technical</h3>
            <p>Don't have a background in IT?  We could still use your help in the following areas:</p>
            <ul className="checkList">
                <li><b>Documentation</b> - We have a shortage of both technical and non-technical documentation at the moment.  Help built out support wikis and provide in-application support snippets.</li>
                <li><b>Support</b> - We try to make setup as easy as possible on churches, but some still need help.  Providing one-on-one help for those who need it would greatly help free up developer time to work on features.</li>
                <li><b>Beta Users</b> - When we complete new features we need a handful of churches who are willing to try them out and discover potential issues before we release them to a wider group.  Sign up to be one of those churches.</li>
                <li><b>Feature Requests</b> - We depend on the churches using the software to let us know what the needs are.  If you have an idea of how to make processes more efficient or simple, let us know.</li>
                <li><b>Marketing</b> - We always need help getting the word out to churches about what we're trying to do.  If you believe you have a platform or skills in this area, we would love the help.</li>
            </ul>
        </div>
    );
}

import React from 'react'

function TodaysTasksHeader() {
    return(
        <div className={styles["HubSection-header"]}> 
            <div className={styles["HubSection-titleContainer"]}>
                <div>Tasks Due Soon</div>
            </div>
            <div classsName={styles["HubSection-extraHeaderElement"]}>
                <h3>Icon</h3>
            </div>
            <div className={styles["HubSection-headerRightSideElement"]}>
                <a>see all my tasks</a>
            </div>
        </div>
    )
}

export default TodaysTasksHeader 
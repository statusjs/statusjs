function notify_test() {

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            status_notify("All good", "positive");
            break;
        case 1:
            status_notify("Warning", "neutral");
            break;
        case 2:
            status_notify("Problem", "negative");
            break;
    }

    setTimeout(() => {
        notify_test();
    }, Math.random() * 1000 * 5 + 5000);
}
notify_test();
import Accordion from "./components/Accordion";
function App() {

    const items = [
        {
            id: 'abc231',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use Reacy on any project you want. You can use Reacy on any project you want. '
        },
        {
            id: 'c3232sdf',
            label: 'Can I use Javascript on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use Reacy on any project you want. You can use Reacy on any project you want. '

        },
        {
            id: 'cdsdsdsds',
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project you want. You can use Reacy on any project you want. You can use Reacy on any project you want. You can use Reacy on any project you want. '
        },
    ];

    return <Accordion items={items} />
}

export default App;

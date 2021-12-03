import Card from "../Feed/Card";

function Badges() {
    const data = [
        'test123232',
        'dawdwa',
        '52525252',
        'dadada',
        'dwadawdw',
        'hhhhh',
        'test123232',
        'dawdwa',
        '52525252',
        'dadada',
        'dwadawdw',
        'hhhhh'
    ];

    return (
        <div>
            {
                data.map((data, index) => {
                    return(
                        <span key={index} className="badge badge-pill bg-secondary mx-1">{data}</span>
                    );
                })
            }
        </div>
    );
}

export default Badges;
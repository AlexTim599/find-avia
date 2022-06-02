import SortedAside from '../SortedAside';
import FiltredAside from '../FiltredAside';
import PriceAside from '../PriceAside';
import AirlinesAside from '../AirlinesAside';

//переименовать

const FilterPanel = () => {
    return (
        <div style={{ width: '300px', fontSize: '13px', marginTop: "30px" }}>
            <SortedAside />
            <FiltredAside />
            <PriceAside />
            <AirlinesAside />
        </div>

    )
}

export default FilterPanel


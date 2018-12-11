import createImmutableSelector from './createImmutableSelector';


const dataSelector = state => state.reducer.data;
export const filterSelector = (state, props) => createImmutableSelector(
    dataSelector,
    (data) => data.filter(item => {
        let res = item['id'].indexOf(props.filter) >= 0;
        res |= item['year'].indexOf(props.filter) >= 0;
        res |= item['title'].indexOf(props.filter) >= 0;
        res |= item['description'].indexOf(props.filter) >=0;
        return res;
    })
);
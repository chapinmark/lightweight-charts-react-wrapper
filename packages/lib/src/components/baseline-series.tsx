import {
    ForwardedRef,
    forwardRef,
    memo,
    ReactNode,
} from 'react';
import {BaselineSeriesPartialOptions, ISeriesApi, SeriesDataItemTypeMap, SeriesMarker, Time} from 'lightweight-charts';

import {SeriesContext} from './internal/series-context.js';
import {createSeriesHook} from './internal/create-series-hook.js';
import {BaselineSeriesParams} from '../internal/series.js';

const useBaselineSeriesAction = createSeriesHook<BaselineSeriesParams>('Baseline');

export interface BaselineSeriesProps extends BaselineSeriesPartialOptions {
    data: SeriesDataItemTypeMap['Baseline'][];
    markers?: SeriesMarker<Time>[];
    reactive?: boolean;
    paneIndex?: number;
    children?: ReactNode;
}

export const BaselineSeries = memo(forwardRef(function BaselineSeries(props: BaselineSeriesProps, ref: ForwardedRef<ISeriesApi<'Baseline'>>) {
    const {children, ...rest} = props;

    const context = useBaselineSeriesAction(rest, ref);

    return (
        <SeriesContext.Provider value={context.current}>
            {children}
        </SeriesContext.Provider>
    );
}));


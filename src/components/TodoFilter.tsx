import { memo } from 'react';
import { FilterType } from '../interfaces';
import { useTodos } from '../hooks/useTodos';

export const TodoFilter = memo(() => {
    // console.log("TodoFilter")
    const { filter, setFilter } = useTodos()

    const handleFilterChange = (newFilter: FilterType) => {
        setFilter(newFilter);
    };

    return (
        <div className="btn-group btn-group-sm" role="group">
            <span
                className={`btn btn-outline-secondary ${filter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterChange('all')}
            >
                All
            </span>
            <span
                className={`btn btn-outline-secondary ${filter === 'pending' ? 'active' : ''}`}
                onClick={() => handleFilterChange('pending')}
            >
                Pendientes
            </span>
            <span
                className={`btn btn-outline-secondary ${filter === 'completed' ? 'active' : ''}`}
                onClick={() => handleFilterChange('completed')}
            >
                Completos
            </span>
        </div>
    )
})

import React, { Suspense } from 'react';
import { ModuleLoader } from '../components/ModuleLoader';

export function componentLoaderFactory(url, scope) {
    return function (props) {
        const {module, children, ...rest } = props;
        return (
            <Suspense fallback={'Загрузка . . . '}>
                <ModuleLoader
                    url={url}
                    scope={scope}
                    module={ `./${module}` }
                    { ...rest }
                >
                    { children }
                </ModuleLoader>
            </Suspense>
        )
    }
}

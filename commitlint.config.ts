import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // nueva funcionalidad
        'fix', // corrección de bug
        'docs', // documentación
        'style', // formato, espacios (sin cambio de lógica)
        'refactor', // refactorización sin fix ni feat
        'perf', // mejora de performance
        'test', // tests
        'chore', // tareas de mantenimiento, deps
        'ci', // cambios en CI/CD
        'revert', // revertir un commit
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100],
  },
};

export default config;

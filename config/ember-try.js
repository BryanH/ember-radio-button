/* eslint-env node */
module.exports = {
  scenarios: [
    {
      name: 'ember-1.11',
      bower: {
        dependencies: {
          'ember': '~1.11.0'
        },
        resolutions: {
          'ember': '~1.11.0'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-1.12',
      bower: {
        dependencies: {
          'ember': '~1.12.0'
        },
        resolutions: {
          'ember': '~1.12.0'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-1.13',
      bower: {
        dependencies: {
          'ember': '~1.13.0'
        },
        resolutions: {
          'ember': '~1.13.0'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-lts-2.4',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-4'
        },
        resolutions: {
          'ember': 'lts-2-4'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-lts-2.8',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-8'
        },
        resolutions: {
          'ember': 'lts-2-8'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-lts-2.12',
      npm: {
        devDependencies: {
          'ember-source': '~2.12.0'
        }
      }
    },
    {
      name: 'ember-lts-2.16',
      env: {
        EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true }),
      },
      npm: {
        devDependencies: {
          '@ember/jquery': '^0.5.1',
          'ember-source': '~2.16.0'
        }
      }
    },
    {
      name: 'ember-lts-2.18',
      env: {
        EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true }),
      },
      npm: {
        devDependencies: {
          '@ember/jquery': '^0.5.1',
          'ember-source': '~2.18.0'
        }
      }
    },
    {
      name: 'ember-lts-3.4',
      npm: {
        devDependencies: {
          'ember-source': '~3.4.0'
        }
      }
    },
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-default',
      npm: {
        devDependencies: {}
      }
    },
    {
      name: 'ember-default-with-jquery',
      env: {
        EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true }),
      },
      npm: {
        devDependencies: {
          '@ember/jquery': '^0.5.1'
        }
      }
    },
  ]
};

#!/bin/sh
eval $(egrep -v '^#' .env | xargs)
get-graphql-schema ${VUE_APP_GRAPHQL_ENDPOINT} --header "x-hasura-admin-secret=$HASURA_GRAPHQL_ADMIN_SECRET" >schema.graphql

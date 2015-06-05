export default (angular) => {
    "use strict";
    var urlBase = "http://api.noders.com/api",
        authHeader = "authorization",
        module = angular.module("lbServices", ["ngResource"]);
    module.factory("Noder", ["LoopBackResource", "LoopBackAuth", "$injector", function(e, r, t) {
        var o = e(urlBase + "/Noders/:id", {
            id: "@id"
        }, {
            prototype$__findById__accessTokens: {
                url: urlBase + "/Noders/:id/accessTokens/:fk",
                method: "GET"
            },
            prototype$__destroyById__accessTokens: {
                url: urlBase + "/Noders/:id/accessTokens/:fk",
                method: "DELETE"
            },
            prototype$__updateById__accessTokens: {
                url: urlBase + "/Noders/:id/accessTokens/:fk",
                method: "PUT"
            },
            prototype$__get__host: {
                url: urlBase + "/Noders/:id/host",
                method: "GET"
            },
            prototype$__findById__sigue: {
                url: urlBase + "/Noders/:id/sigue/:fk",
                method: "GET"
            },
            prototype$__destroyById__sigue: {
                url: urlBase + "/Noders/:id/sigue/:fk",
                method: "DELETE"
            },
            prototype$__updateById__sigue: {
                url: urlBase + "/Noders/:id/sigue/:fk",
                method: "PUT"
            },
            prototype$__link__sigue: {
                url: urlBase + "/Noders/:id/sigue/rel/:fk",
                method: "PUT"
            },
            prototype$__unlink__sigue: {
                url: urlBase + "/Noders/:id/sigue/rel/:fk",
                method: "DELETE"
            },
            prototype$__exists__sigue: {
                url: urlBase + "/Noders/:id/sigue/rel/:fk",
                method: "HEAD"
            },
            prototype$__findById__paricipante: {
                url: urlBase + "/Noders/:id/paricipante/:fk",
                method: "GET"
            },
            prototype$__destroyById__paricipante: {
                url: urlBase + "/Noders/:id/paricipante/:fk",
                method: "DELETE"
            },
            prototype$__updateById__paricipante: {
                url: urlBase + "/Noders/:id/paricipante/:fk",
                method: "PUT"
            },
            prototype$__link__paricipante: {
                url: urlBase + "/Noders/:id/paricipante/rel/:fk",
                method: "PUT"
            },
            prototype$__unlink__paricipante: {
                url: urlBase + "/Noders/:id/paricipante/rel/:fk",
                method: "DELETE"
            },
            prototype$__exists__paricipante: {
                url: urlBase + "/Noders/:id/paricipante/rel/:fk",
                method: "HEAD"
            },
            prototype$__get__accessTokens: {
                isArray: !0,
                url: urlBase + "/Noders/:id/accessTokens",
                method: "GET"
            },
            prototype$__create__accessTokens: {
                url: urlBase + "/Noders/:id/accessTokens",
                method: "POST"
            },
            prototype$__delete__accessTokens: {
                url: urlBase + "/Noders/:id/accessTokens",
                method: "DELETE"
            },
            prototype$__count__accessTokens: {
                url: urlBase + "/Noders/:id/accessTokens/count",
                method: "GET"
            },
            prototype$__get__sigue: {
                isArray: !0,
                url: urlBase + "/Noders/:id/sigue",
                method: "GET"
            },
            prototype$__create__sigue: {
                url: urlBase + "/Noders/:id/sigue",
                method: "POST"
            },
            prototype$__delete__sigue: {
                url: urlBase + "/Noders/:id/sigue",
                method: "DELETE"
            },
            prototype$__count__sigue: {
                url: urlBase + "/Noders/:id/sigue/count",
                method: "GET"
            },
            prototype$__get__paricipante: {
                isArray: !0,
                url: urlBase + "/Noders/:id/paricipante",
                method: "GET"
            },
            prototype$__create__paricipante: {
                url: urlBase + "/Noders/:id/paricipante",
                method: "POST"
            },
            prototype$__delete__paricipante: {
                url: urlBase + "/Noders/:id/paricipante",
                method: "DELETE"
            },
            prototype$__count__paricipante: {
                url: urlBase + "/Noders/:id/paricipante/count",
                method: "GET"
            },
            create: {
                url: urlBase + "/Noders",
                method: "POST"
            },
            upsert: {
                url: urlBase + "/Noders",
                method: "PUT"
            },
            exists: {
                url: urlBase + "/Noders/:id/exists",
                method: "GET"
            },
            findById: {
                url: urlBase + "/Noders/:id",
                method: "GET"
            },
            find: {
                isArray: !0,
                url: urlBase + "/Noders",
                method: "GET"
            },
            findOne: {
                url: urlBase + "/Noders/findOne",
                method: "GET"
            },
            updateAll: {
                url: urlBase + "/Noders/update",
                method: "POST"
            },
            deleteById: {
                url: urlBase + "/Noders/:id",
                method: "DELETE"
            },
            count: {
                url: urlBase + "/Noders/count",
                method: "GET"
            },
            prototype$updateAttributes: {
                url: urlBase + "/Noders/:id",
                method: "PUT"
            },
            login: {
                params: {
                    include: "user"
                },
                interceptor: {
                    response: function(e) {
                        var t = e.data;
                        return r.setUser(t.id, t.userId, t.user), r.rememberMe = e.config.params.rememberMe !== !1, r.save(), e.resource
                    }
                },
                url: urlBase + "/Noders/login",
                method: "POST"
            },
            logout: {
                interceptor: {
                    response: function(e) {
                        return r.clearUser(), r.clearStorage(), e.resource
                    }
                },
                url: urlBase + "/Noders/logout",
                method: "POST"
            },
            confirm: {
                url: urlBase + "/Noders/confirm",
                method: "GET"
            },
            resetPassword: {
                url: urlBase + "/Noders/reset",
                method: "POST"
            },
            prototype$volverAdmin: {
                url: urlBase + "/Noders/:id/volverAdmin",
                method: "POST"
            },
            "::findById::Comunidad::noders": {
                url: urlBase + "/Comunidades/:id/noders/:fk",
                method: "GET"
            },
            "::destroyById::Comunidad::noders": {
                url: urlBase + "/Comunidades/:id/noders/:fk",
                method: "DELETE"
            },
            "::updateById::Comunidad::noders": {
                url: urlBase + "/Comunidades/:id/noders/:fk",
                method: "PUT"
            },
            "::findById::Comunidad::seguidores": {
                url: urlBase + "/Comunidades/:id/seguidores/:fk",
                method: "GET"
            },
            "::destroyById::Comunidad::seguidores": {
                url: urlBase + "/Comunidades/:id/seguidores/:fk",
                method: "DELETE"
            },
            "::updateById::Comunidad::seguidores": {
                url: urlBase + "/Comunidades/:id/seguidores/:fk",
                method: "PUT"
            },
            "::link::Comunidad::seguidores": {
                url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
                method: "PUT"
            },
            "::unlink::Comunidad::seguidores": {
                url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
                method: "DELETE"
            },
            "::exists::Comunidad::seguidores": {
                url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
                method: "HEAD"
            },
            "::get::Comunidad::noders": {
                isArray: !0,
                url: urlBase + "/Comunidades/:id/noders",
                method: "GET"
            },
            "::create::Comunidad::noders": {
                url: urlBase + "/Comunidades/:id/noders",
                method: "POST"
            },
            "::delete::Comunidad::noders": {
                url: urlBase + "/Comunidades/:id/noders",
                method: "DELETE"
            },
            "::count::Comunidad::noders": {
                url: urlBase + "/Comunidades/:id/noders/count",
                method: "GET"
            },
            "::get::Comunidad::seguidores": {
                isArray: !0,
                url: urlBase + "/Comunidades/:id/seguidores",
                method: "GET"
            },
            "::create::Comunidad::seguidores": {
                url: urlBase + "/Comunidades/:id/seguidores",
                method: "POST"
            },
            "::delete::Comunidad::seguidores": {
                url: urlBase + "/Comunidades/:id/seguidores",
                method: "DELETE"
            },
            "::count::Comunidad::seguidores": {
                url: urlBase + "/Comunidades/:id/seguidores/count",
                method: "GET"
            },
            "::findById::Evento::suscritos": {
                url: urlBase + "/Eventos/:id/suscritos/:fk",
                method: "GET"
            },
            "::destroyById::Evento::suscritos": {
                url: urlBase + "/Eventos/:id/suscritos/:fk",
                method: "DELETE"
            },
            "::updateById::Evento::suscritos": {
                url: urlBase + "/Eventos/:id/suscritos/:fk",
                method: "PUT"
            },
            "::link::Evento::suscritos": {
                url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
                method: "PUT"
            },
            "::unlink::Evento::suscritos": {
                url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
                method: "DELETE"
            },
            "::exists::Evento::suscritos": {
                url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
                method: "HEAD"
            },
            "::get::Evento::suscritos": {
                isArray: !0,
                url: urlBase + "/Eventos/:id/suscritos",
                method: "GET"
            },
            "::create::Evento::suscritos": {
                url: urlBase + "/Eventos/:id/suscritos",
                method: "POST"
            },
            "::delete::Evento::suscritos": {
                url: urlBase + "/Eventos/:id/suscritos",
                method: "DELETE"
            },
            "::count::Evento::suscritos": {
                url: urlBase + "/Eventos/:id/suscritos/count",
                method: "GET"
            },
            getCurrent: {
                url: urlBase + "/Noders/:id",
                method: "GET",
                params: {
                    id: function() {
                        var e = r.currentUserId;
                        return null == e && (e = "__anonymous__"), e
                    }
                },
                interceptor: {
                    response: function(e) {
                        return r.currentUserData = e.data, e.resource
                    }
                },
                __isGetCurrentUser__: !0
            }
        });
        return o.updateOrCreate = o.upsert, o.update = o.updateAll, o.destroyById = o.deleteById, o.removeById = o.deleteById, o.getCachedCurrent = function() {
            var e = r.currentUserData;
            return e ? new o(e) : null
        }, o.isAuthenticated = function() {
            return null != this.getCurrentId()
        }, o.getCurrentId = function() {
            return r.currentUserId
        }, o.modelName = "Noder", o.host = function() {
            var e = t.get("Comunidad"),
                r = e["::get::Noder::host"];
            return r.apply(o, arguments)
        }, o.sigue = function() {
            var e = t.get("Comunidad"),
                r = e["::get::Noder::sigue"];
            return r.apply(o, arguments)
        }, o.sigue.count = function() {
            var e = t.get("Comunidad"),
                r = e["::count::Noder::sigue"];
            return r.apply(o, arguments)
        }, o.sigue.create = function() {
            var e = t.get("Comunidad"),
                r = e["::create::Noder::sigue"];
            return r.apply(o, arguments)
        }, o.sigue.destroyAll = function() {
            var e = t.get("Comunidad"),
                r = e["::delete::Noder::sigue"];
            return r.apply(o, arguments)
        }, o.sigue.destroyById = function() {
            var e = t.get("Comunidad"),
                r = e["::destroyById::Noder::sigue"];
            return r.apply(o, arguments)
        }, o.sigue.exists = function() {
            var e = t.get("Comunidad"),
                r = e["::exists::Noder::sigue"];
            return r.apply(o, arguments)
        }, o.sigue.findById = function() {
            var e = t.get("Comunidad"),
                r = e["::findById::Noder::sigue"];
            return r.apply(o, arguments)
        }, o.sigue.link = function() {
            var e = t.get("Comunidad"),
                r = e["::link::Noder::sigue"];
            return r.apply(o, arguments)
        }, o.sigue.unlink = function() {
            var e = t.get("Comunidad"),
                r = e["::unlink::Noder::sigue"];
            return r.apply(o, arguments)
        }, o.sigue.updateById = function() {
            var e = t.get("Comunidad"),
                r = e["::updateById::Noder::sigue"];
            return r.apply(o, arguments)
        }, o.paricipante = function() {
            var e = t.get("Evento"),
                r = e["::get::Noder::paricipante"];
            return r.apply(o, arguments)
        }, o.paricipante.count = function() {
            var e = t.get("Evento"),
                r = e["::count::Noder::paricipante"];
            return r.apply(o, arguments)
        }, o.paricipante.create = function() {
            var e = t.get("Evento"),
                r = e["::create::Noder::paricipante"];
            return r.apply(o, arguments)
        }, o.paricipante.destroyAll = function() {
            var e = t.get("Evento"),
                r = e["::delete::Noder::paricipante"];
            return r.apply(o, arguments)
        }, o.paricipante.destroyById = function() {
            var e = t.get("Evento"),
                r = e["::destroyById::Noder::paricipante"];
            return r.apply(o, arguments)
        }, o.paricipante.exists = function() {
            var e = t.get("Evento"),
                r = e["::exists::Noder::paricipante"];
            return r.apply(o, arguments)
        }, o.paricipante.findById = function() {
            var e = t.get("Evento"),
                r = e["::findById::Noder::paricipante"];
            return r.apply(o, arguments)
        }, o.paricipante.link = function() {
            var e = t.get("Evento"),
                r = e["::link::Noder::paricipante"];
            return r.apply(o, arguments)
        }, o.paricipante.unlink = function() {
            var e = t.get("Evento"),
                r = e["::unlink::Noder::paricipante"];
            return r.apply(o, arguments)
        }, o.paricipante.updateById = function() {
            var e = t.get("Evento"),
                r = e["::updateById::Noder::paricipante"];
            return r.apply(o, arguments)
        }, o
    }]), module.factory("Partner", ["LoopBackResource", "LoopBackAuth", "$injector", function(e, r, t) {
        var o = e(urlBase + "/Partners/:id", {
            id: "@id"
        }, {
            prototype$__get__comunidad: {
                url: urlBase + "/Partners/:id/comunidad",
                method: "GET"
            },
            create: {
                url: urlBase + "/Partners",
                method: "POST"
            },
            upsert: {
                url: urlBase + "/Partners",
                method: "PUT"
            },
            exists: {
                url: urlBase + "/Partners/:id/exists",
                method: "GET"
            },
            findById: {
                url: urlBase + "/Partners/:id",
                method: "GET"
            },
            find: {
                isArray: !0,
                url: urlBase + "/Partners",
                method: "GET"
            },
            findOne: {
                url: urlBase + "/Partners/findOne",
                method: "GET"
            },
            updateAll: {
                url: urlBase + "/Partners/update",
                method: "POST"
            },
            deleteById: {
                url: urlBase + "/Partners/:id",
                method: "DELETE"
            },
            count: {
                url: urlBase + "/Partners/count",
                method: "GET"
            },
            prototype$updateAttributes: {
                url: urlBase + "/Partners/:id",
                method: "PUT"
            },
            "::findById::Comunidad::partners": {
                url: urlBase + "/Comunidades/:id/partners/:fk",
                method: "GET"
            },
            "::destroyById::Comunidad::partners": {
                url: urlBase + "/Comunidades/:id/partners/:fk",
                method: "DELETE"
            },
            "::updateById::Comunidad::partners": {
                url: urlBase + "/Comunidades/:id/partners/:fk",
                method: "PUT"
            },
            "::get::Comunidad::partners": {
                isArray: !0,
                url: urlBase + "/Comunidades/:id/partners",
                method: "GET"
            },
            "::create::Comunidad::partners": {
                url: urlBase + "/Comunidades/:id/partners",
                method: "POST"
            },
            "::delete::Comunidad::partners": {
                url: urlBase + "/Comunidades/:id/partners",
                method: "DELETE"
            },
            "::count::Comunidad::partners": {
                url: urlBase + "/Comunidades/:id/partners/count",
                method: "GET"
            }
        });
        return o.updateOrCreate = o.upsert, o.update = o.updateAll, o.destroyById = o.deleteById, o.removeById = o.deleteById, o.modelName = "Partner", o.comunidad = function() {
            var e = t.get("Comunidad"),
                r = e["::get::Partner::comunidad"];
            return r.apply(o, arguments)
        }, o
    }]), module.factory("Comunidad", ["LoopBackResource", "LoopBackAuth", "$injector", function(e, r, t) {
        var o = e(urlBase + "/Comunidades/:id", {
            id: "@id"
        }, {
            prototype$__findById__noders: {
                url: urlBase + "/Comunidades/:id/noders/:fk",
                method: "GET"
            },
            prototype$__destroyById__noders: {
                url: urlBase + "/Comunidades/:id/noders/:fk",
                method: "DELETE"
            },
            prototype$__updateById__noders: {
                url: urlBase + "/Comunidades/:id/noders/:fk",
                method: "PUT"
            },
            prototype$__findById__partners: {
                url: urlBase + "/Comunidades/:id/partners/:fk",
                method: "GET"
            },
            prototype$__destroyById__partners: {
                url: urlBase + "/Comunidades/:id/partners/:fk",
                method: "DELETE"
            },
            prototype$__updateById__partners: {
                url: urlBase + "/Comunidades/:id/partners/:fk",
                method: "PUT"
            },
            prototype$__findById__eventos: {
                url: urlBase + "/Comunidades/:id/eventos/:fk",
                method: "GET"
            },
            prototype$__destroyById__eventos: {
                url: urlBase + "/Comunidades/:id/eventos/:fk",
                method: "DELETE"
            },
            prototype$__updateById__eventos: {
                url: urlBase + "/Comunidades/:id/eventos/:fk",
                method: "PUT"
            },
            prototype$__findById__seguidores: {
                url: urlBase + "/Comunidades/:id/seguidores/:fk",
                method: "GET"
            },
            prototype$__destroyById__seguidores: {
                url: urlBase + "/Comunidades/:id/seguidores/:fk",
                method: "DELETE"
            },
            prototype$__updateById__seguidores: {
                url: urlBase + "/Comunidades/:id/seguidores/:fk",
                method: "PUT"
            },
            prototype$__link__seguidores: {
                url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
                method: "PUT"
            },
            prototype$__unlink__seguidores: {
                url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
                method: "DELETE"
            },
            prototype$__exists__seguidores: {
                url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
                method: "HEAD"
            },
            prototype$__get__noders: {
                isArray: !0,
                url: urlBase + "/Comunidades/:id/noders",
                method: "GET"
            },
            prototype$__create__noders: {
                url: urlBase + "/Comunidades/:id/noders",
                method: "POST"
            },
            prototype$__delete__noders: {
                url: urlBase + "/Comunidades/:id/noders",
                method: "DELETE"
            },
            prototype$__count__noders: {
                url: urlBase + "/Comunidades/:id/noders/count",
                method: "GET"
            },
            prototype$__get__partners: {
                isArray: !0,
                url: urlBase + "/Comunidades/:id/partners",
                method: "GET"
            },
            prototype$__create__partners: {
                url: urlBase + "/Comunidades/:id/partners",
                method: "POST"
            },
            prototype$__delete__partners: {
                url: urlBase + "/Comunidades/:id/partners",
                method: "DELETE"
            },
            prototype$__count__partners: {
                url: urlBase + "/Comunidades/:id/partners/count",
                method: "GET"
            },
            prototype$__get__eventos: {
                isArray: !0,
                url: urlBase + "/Comunidades/:id/eventos",
                method: "GET"
            },
            prototype$__create__eventos: {
                url: urlBase + "/Comunidades/:id/eventos",
                method: "POST"
            },
            prototype$__delete__eventos: {
                url: urlBase + "/Comunidades/:id/eventos",
                method: "DELETE"
            },
            prototype$__count__eventos: {
                url: urlBase + "/Comunidades/:id/eventos/count",
                method: "GET"
            },
            prototype$__get__seguidores: {
                isArray: !0,
                url: urlBase + "/Comunidades/:id/seguidores",
                method: "GET"
            },
            prototype$__create__seguidores: {
                url: urlBase + "/Comunidades/:id/seguidores",
                method: "POST"
            },
            prototype$__delete__seguidores: {
                url: urlBase + "/Comunidades/:id/seguidores",
                method: "DELETE"
            },
            prototype$__count__seguidores: {
                url: urlBase + "/Comunidades/:id/seguidores/count",
                method: "GET"
            },
            create: {
                url: urlBase + "/Comunidades",
                method: "POST"
            },
            upsert: {
                url: urlBase + "/Comunidades",
                method: "PUT"
            },
            exists: {
                url: urlBase + "/Comunidades/:id/exists",
                method: "GET"
            },
            findById: {
                url: urlBase + "/Comunidades/:id",
                method: "GET"
            },
            find: {
                isArray: !0,
                url: urlBase + "/Comunidades",
                method: "GET"
            },
            findOne: {
                url: urlBase + "/Comunidades/findOne",
                method: "GET"
            },
            updateAll: {
                url: urlBase + "/Comunidades/update",
                method: "POST"
            },
            deleteById: {
                url: urlBase + "/Comunidades/:id",
                method: "DELETE"
            },
            count: {
                url: urlBase + "/Comunidades/count",
                method: "GET"
            },
            prototype$updateAttributes: {
                url: urlBase + "/Comunidades/:id",
                method: "PUT"
            },
            "::get::Noder::host": {
                url: urlBase + "/Noders/:id/host",
                method: "GET"
            },
            "::findById::Noder::sigue": {
                url: urlBase + "/Noders/:id/sigue/:fk",
                method: "GET"
            },
            "::destroyById::Noder::sigue": {
                url: urlBase + "/Noders/:id/sigue/:fk",
                method: "DELETE"
            },
            "::updateById::Noder::sigue": {
                url: urlBase + "/Noders/:id/sigue/:fk",
                method: "PUT"
            },
            "::link::Noder::sigue": {
                url: urlBase + "/Noders/:id/sigue/rel/:fk",
                method: "PUT"
            },
            "::unlink::Noder::sigue": {
                url: urlBase + "/Noders/:id/sigue/rel/:fk",
                method: "DELETE"
            },
            "::exists::Noder::sigue": {
                url: urlBase + "/Noders/:id/sigue/rel/:fk",
                method: "HEAD"
            },
            "::get::Noder::sigue": {
                isArray: !0,
                url: urlBase + "/Noders/:id/sigue",
                method: "GET"
            },
            "::create::Noder::sigue": {
                url: urlBase + "/Noders/:id/sigue",
                method: "POST"
            },
            "::delete::Noder::sigue": {
                url: urlBase + "/Noders/:id/sigue",
                method: "DELETE"
            },
            "::count::Noder::sigue": {
                url: urlBase + "/Noders/:id/sigue/count",
                method: "GET"
            },
            "::get::Partner::comunidad": {
                url: urlBase + "/Partners/:id/comunidad",
                method: "GET"
            },
            "::get::Evento::comunidad": {
                url: urlBase + "/Eventos/:id/comunidad",
                method: "GET"
            }
        });
        return o.updateOrCreate = o.upsert, o.update = o.updateAll, o.destroyById = o.deleteById, o.removeById = o.deleteById, o.modelName = "Comunidad", o.noders = function() {
            var e = t.get("Noder"),
                r = e["::get::Comunidad::noders"];
            return r.apply(o, arguments)
        }, o.noders.count = function() {
            var e = t.get("Noder"),
                r = e["::count::Comunidad::noders"];
            return r.apply(o, arguments)
        }, o.noders.create = function() {
            var e = t.get("Noder"),
                r = e["::create::Comunidad::noders"];
            return r.apply(o, arguments)
        }, o.noders.destroyAll = function() {
            var e = t.get("Noder"),
                r = e["::delete::Comunidad::noders"];
            return r.apply(o, arguments)
        }, o.noders.destroyById = function() {
            var e = t.get("Noder"),
                r = e["::destroyById::Comunidad::noders"];
            return r.apply(o, arguments)
        }, o.noders.findById = function() {
            var e = t.get("Noder"),
                r = e["::findById::Comunidad::noders"];
            return r.apply(o, arguments)
        }, o.noders.updateById = function() {
            var e = t.get("Noder"),
                r = e["::updateById::Comunidad::noders"];
            return r.apply(o, arguments)
        }, o.partners = function() {
            var e = t.get("Partner"),
                r = e["::get::Comunidad::partners"];
            return r.apply(o, arguments)
        }, o.partners.count = function() {
            var e = t.get("Partner"),
                r = e["::count::Comunidad::partners"];
            return r.apply(o, arguments)
        }, o.partners.create = function() {
            var e = t.get("Partner"),
                r = e["::create::Comunidad::partners"];
            return r.apply(o, arguments)
        }, o.partners.destroyAll = function() {
            var e = t.get("Partner"),
                r = e["::delete::Comunidad::partners"];
            return r.apply(o, arguments)
        }, o.partners.destroyById = function() {
            var e = t.get("Partner"),
                r = e["::destroyById::Comunidad::partners"];
            return r.apply(o, arguments)
        }, o.partners.findById = function() {
            var e = t.get("Partner"),
                r = e["::findById::Comunidad::partners"];
            return r.apply(o, arguments)
        }, o.partners.updateById = function() {
            var e = t.get("Partner"),
                r = e["::updateById::Comunidad::partners"];
            return r.apply(o, arguments)
        }, o.eventos = function() {
            var e = t.get("Evento"),
                r = e["::get::Comunidad::eventos"];
            return r.apply(o, arguments)
        }, o.eventos.count = function() {
            var e = t.get("Evento"),
                r = e["::count::Comunidad::eventos"];
            return r.apply(o, arguments)
        }, o.eventos.create = function() {
            var e = t.get("Evento"),
                r = e["::create::Comunidad::eventos"];
            return r.apply(o, arguments)
        }, o.eventos.destroyAll = function() {
            var e = t.get("Evento"),
                r = e["::delete::Comunidad::eventos"];
            return r.apply(o, arguments)
        }, o.eventos.destroyById = function() {
            var e = t.get("Evento"),
                r = e["::destroyById::Comunidad::eventos"];
            return r.apply(o, arguments)
        }, o.eventos.findById = function() {
            var e = t.get("Evento"),
                r = e["::findById::Comunidad::eventos"];
            return r.apply(o, arguments)
        }, o.eventos.updateById = function() {
            var e = t.get("Evento"),
                r = e["::updateById::Comunidad::eventos"];
            return r.apply(o, arguments)
        }, o.seguidores = function() {
            var e = t.get("Noder"),
                r = e["::get::Comunidad::seguidores"];
            return r.apply(o, arguments)
        }, o.seguidores.count = function() {
            var e = t.get("Noder"),
                r = e["::count::Comunidad::seguidores"];
            return r.apply(o, arguments)
        }, o.seguidores.create = function() {
            var e = t.get("Noder"),
                r = e["::create::Comunidad::seguidores"];
            return r.apply(o, arguments)
        }, o.seguidores.destroyAll = function() {
            var e = t.get("Noder"),
                r = e["::delete::Comunidad::seguidores"];
            return r.apply(o, arguments)
        }, o.seguidores.destroyById = function() {
            var e = t.get("Noder"),
                r = e["::destroyById::Comunidad::seguidores"];
            return r.apply(o, arguments)
        }, o.seguidores.exists = function() {
            var e = t.get("Noder"),
                r = e["::exists::Comunidad::seguidores"];
            return r.apply(o, arguments)
        }, o.seguidores.findById = function() {
            var e = t.get("Noder"),
                r = e["::findById::Comunidad::seguidores"];
            return r.apply(o, arguments)
        }, o.seguidores.link = function() {
            var e = t.get("Noder"),
                r = e["::link::Comunidad::seguidores"];
            return r.apply(o, arguments)
        }, o.seguidores.unlink = function() {
            var e = t.get("Noder"),
                r = e["::unlink::Comunidad::seguidores"];
            return r.apply(o, arguments)
        }, o.seguidores.updateById = function() {
            var e = t.get("Noder"),
                r = e["::updateById::Comunidad::seguidores"];
            return r.apply(o, arguments)
        }, o
    }]), module.factory("Evento", ["LoopBackResource", "LoopBackAuth", "$injector", function(e, r, t) {
        var o = e(urlBase + "/Eventos/:id", {
            id: "@id"
        }, {
            prototype$__get__comunidad: {
                url: urlBase + "/Eventos/:id/comunidad",
                method: "GET"
            },
            prototype$__findById__suscritos: {
                url: urlBase + "/Eventos/:id/suscritos/:fk",
                method: "GET"
            },
            prototype$__destroyById__suscritos: {
                url: urlBase + "/Eventos/:id/suscritos/:fk",
                method: "DELETE"
            },
            prototype$__updateById__suscritos: {
                url: urlBase + "/Eventos/:id/suscritos/:fk",
                method: "PUT"
            },
            prototype$__link__suscritos: {
                url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
                method: "PUT"
            },
            prototype$__unlink__suscritos: {
                url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
                method: "DELETE"
            },
            prototype$__exists__suscritos: {
                url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
                method: "HEAD"
            },
            prototype$__get__suscritos: {
                isArray: !0,
                url: urlBase + "/Eventos/:id/suscritos",
                method: "GET"
            },
            prototype$__create__suscritos: {
                url: urlBase + "/Eventos/:id/suscritos",
                method: "POST"
            },
            prototype$__delete__suscritos: {
                url: urlBase + "/Eventos/:id/suscritos",
                method: "DELETE"
            },
            prototype$__count__suscritos: {
                url: urlBase + "/Eventos/:id/suscritos/count",
                method: "GET"
            },
            create: {
                url: urlBase + "/Eventos",
                method: "POST"
            },
            upsert: {
                url: urlBase + "/Eventos",
                method: "PUT"
            },
            exists: {
                url: urlBase + "/Eventos/:id/exists",
                method: "GET"
            },
            findById: {
                url: urlBase + "/Eventos/:id",
                method: "GET"
            },
            find: {
                isArray: !0,
                url: urlBase + "/Eventos",
                method: "GET"
            },
            findOne: {
                url: urlBase + "/Eventos/findOne",
                method: "GET"
            },
            updateAll: {
                url: urlBase + "/Eventos/update",
                method: "POST"
            },
            deleteById: {
                url: urlBase + "/Eventos/:id",
                method: "DELETE"
            },
            count: {
                url: urlBase + "/Eventos/count",
                method: "GET"
            },
            prototype$updateAttributes: {
                url: urlBase + "/Eventos/:id",
                method: "PUT"
            },
            "::findById::Noder::paricipante": {
                url: urlBase + "/Noders/:id/paricipante/:fk",
                method: "GET"
            },
            "::destroyById::Noder::paricipante": {
                url: urlBase + "/Noders/:id/paricipante/:fk",
                method: "DELETE"
            },
            "::updateById::Noder::paricipante": {
                url: urlBase + "/Noders/:id/paricipante/:fk",
                method: "PUT"
            },
            "::link::Noder::paricipante": {
                url: urlBase + "/Noders/:id/paricipante/rel/:fk",
                method: "PUT"
            },
            "::unlink::Noder::paricipante": {
                url: urlBase + "/Noders/:id/paricipante/rel/:fk",
                method: "DELETE"
            },
            "::exists::Noder::paricipante": {
                url: urlBase + "/Noders/:id/paricipante/rel/:fk",
                method: "HEAD"
            },
            "::get::Noder::paricipante": {
                isArray: !0,
                url: urlBase + "/Noders/:id/paricipante",
                method: "GET"
            },
            "::create::Noder::paricipante": {
                url: urlBase + "/Noders/:id/paricipante",
                method: "POST"
            },
            "::delete::Noder::paricipante": {
                url: urlBase + "/Noders/:id/paricipante",
                method: "DELETE"
            },
            "::count::Noder::paricipante": {
                url: urlBase + "/Noders/:id/paricipante/count",
                method: "GET"
            },
            "::findById::Comunidad::eventos": {
                url: urlBase + "/Comunidades/:id/eventos/:fk",
                method: "GET"
            },
            "::destroyById::Comunidad::eventos": {
                url: urlBase + "/Comunidades/:id/eventos/:fk",
                method: "DELETE"
            },
            "::updateById::Comunidad::eventos": {
                url: urlBase + "/Comunidades/:id/eventos/:fk",
                method: "PUT"
            },
            "::get::Comunidad::eventos": {
                isArray: !0,
                url: urlBase + "/Comunidades/:id/eventos",
                method: "GET"
            },
            "::create::Comunidad::eventos": {
                url: urlBase + "/Comunidades/:id/eventos",
                method: "POST"
            },
            "::delete::Comunidad::eventos": {
                url: urlBase + "/Comunidades/:id/eventos",
                method: "DELETE"
            },
            "::count::Comunidad::eventos": {
                url: urlBase + "/Comunidades/:id/eventos/count",
                method: "GET"
            }
        });
        return o.updateOrCreate = o.upsert, o.update = o.updateAll, o.destroyById = o.deleteById, o.removeById = o.deleteById, o.modelName = "Evento", o.comunidad = function() {
            var e = t.get("Comunidad"),
                r = e["::get::Evento::comunidad"];
            return r.apply(o, arguments)
        }, o.suscritos = function() {
            var e = t.get("Noder"),
                r = e["::get::Evento::suscritos"];
            return r.apply(o, arguments)
        }, o.suscritos.count = function() {
            var e = t.get("Noder"),
                r = e["::count::Evento::suscritos"];
            return r.apply(o, arguments)
        }, o.suscritos.create = function() {
            var e = t.get("Noder"),
                r = e["::create::Evento::suscritos"];
            return r.apply(o, arguments)
        }, o.suscritos.destroyAll = function() {
            var e = t.get("Noder"),
                r = e["::delete::Evento::suscritos"];
            return r.apply(o, arguments)
        }, o.suscritos.destroyById = function() {
            var e = t.get("Noder"),
                r = e["::destroyById::Evento::suscritos"];
            return r.apply(o, arguments)
        }, o.suscritos.exists = function() {
            var e = t.get("Noder"),
                r = e["::exists::Evento::suscritos"];
            return r.apply(o, arguments)
        }, o.suscritos.findById = function() {
            var e = t.get("Noder"),
                r = e["::findById::Evento::suscritos"];
            return r.apply(o, arguments)
        }, o.suscritos.link = function() {
            var e = t.get("Noder"),
                r = e["::link::Evento::suscritos"];
            return r.apply(o, arguments)
        }, o.suscritos.unlink = function() {
            var e = t.get("Noder"),
                r = e["::unlink::Evento::suscritos"];
            return r.apply(o, arguments)
        }, o.suscritos.updateById = function() {
            var e = t.get("Noder"),
                r = e["::updateById::Evento::suscritos"];
            return r.apply(o, arguments)
        }, o
    }]), module.factory("LoopBackAuth", function() {
        function e() {
            var e = this;
            o.forEach(function(r) {
                e[r] = t(r)
            }), this.rememberMe = void 0, this.currentUserData = null
        }

        function r(e, r, t) {
            var o = d + r;
            null == t && (t = ""), e[o] = t
        }

        function t(e) {
            var r = d + e;
            return localStorage[r] || sessionStorage[r] || null
        }
        var o = ["accessTokenId", "currentUserId"],
            d = "$LoopBack$";
        return e.prototype.save = function() {
            var e = this,
                t = this.rememberMe ? localStorage : sessionStorage;
            o.forEach(function(o) {
                r(t, o, e[o])
            })
        }, e.prototype.setUser = function(e, r, t) {
            this.accessTokenId = e, this.currentUserId = r, this.currentUserData = t
        }, e.prototype.clearUser = function() {
            this.accessTokenId = null, this.currentUserId = null, this.currentUserData = null
        }, e.prototype.clearStorage = function() {
            o.forEach(function(e) {
                r(sessionStorage, e, null), r(localStorage, e, null)
            })
        }, new e
    }).config(["$httpProvider", function(e) {
        e.interceptors.push("LoopBackAuthRequestInterceptor")
    }]).factory("LoopBackAuthRequestInterceptor", ["$q", "LoopBackAuth", function(e, r) {
        return {
            request: function(t) {
                if (t.url.substr(0, urlBase.length) !== urlBase) return t;
                if (r.accessTokenId) t.headers[authHeader] = r.accessTokenId;
                else if (t.__isGetCurrentUser__) {
                    var o = {
                        body: {
                            error: {
                                status: 401
                            }
                        },
                        status: 401,
                        config: t,
                        headers: function() {
                            return void 0
                        }
                    };
                    return e.reject(o)
                }
                return t || e.when(t)
            }
        }
    }]).provider("LoopBackResource", function() {
        this.setAuthHeader = function(e) {
            authHeader = e
        }, this.setUrlBase = function(e) {
            urlBase = e
        }, this.$get = ["$resource", function(e) {
            return function(r, t, o) {
                var d = e(r, t, o);
                return d.prototype.$save = function(e, r) {
                    var t = d.upsert.call(this, {}, this, e, r);
                    return t.$promise || t
                }, d
            }
        }]
    });
};

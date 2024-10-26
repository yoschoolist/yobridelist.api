"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaslModule = void 0;
const common_1 = require("@nestjs/common");
const casl_ability_factory_1 = require("./casl-ability.factory");
const manage_song_policy_provider_1 = require("./providers/songs/manage-song-policy.provider");
const manage_album_policy_provider_1 = require("./providers/albums/manage-album-policy.provider");
const manage_genre_policy_provider_1 = require("./providers/genres/manage-genre-policy.provider");
const manage_artist_policy_provider_1 = require("./providers/artists/manage-artist-policy.provider");
const update_playlist_policy_provider_1 = require("./providers/playlists/update-playlist-policy.provider");
const delete_playlist_policy_provider_1 = require("./providers/playlists/delete-playlist-policy.provider");
const read_account_policy_provider_1 = require("./providers/users/read-account-policy.provider");
const update_account_policy_provider_1 = require("./providers/users/update-account-policy.provider");
const delete_account_policy_provider_1 = require("./providers/users/delete-account-policy.provider");
const read_admin_dashboard_policy_provider_1 = require("./providers/read-admin-dashboard-policy.provider");
let CaslModule = class CaslModule {
};
exports.CaslModule = CaslModule;
exports.CaslModule = CaslModule = __decorate([
    (0, common_1.Module)({
        providers: [
            casl_ability_factory_1.CaslAbilityFactory,
            manage_song_policy_provider_1.ManageSongPolicyProvider,
            manage_album_policy_provider_1.ManageAlbumPolicyProvider,
            manage_genre_policy_provider_1.ManageGenrePolicyProvider,
            manage_artist_policy_provider_1.ManageArtistPolicyProvider,
            update_playlist_policy_provider_1.UpdatePlaylistPolicyProvider,
            delete_playlist_policy_provider_1.DeletePlaylistPolicyProvider,
            read_account_policy_provider_1.ReadAccountPolicyProvider,
            update_account_policy_provider_1.UpdateAccountPolicyProvider,
            delete_account_policy_provider_1.DeleteAccountPolicyProvider,
            read_admin_dashboard_policy_provider_1.ReadAdminDashboardPolicyProvider,
        ],
        exports: [casl_ability_factory_1.CaslAbilityFactory],
    })
], CaslModule);
//# sourceMappingURL=casl.module.js.map